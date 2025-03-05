const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const controllerRecipe = require('./controller/loggerMiddleware.js');
const signup = require('./controller/signup.js');
require('dotenv').config();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
require('./strategy/local.js');
const flash = require('connect-flash');

const app = express();


const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI
        );


        //sessions 

        const store = new MongoDBStore({
            uri: process.env.MONGODB_URI,
            collection: 'sessions',
        });

        store.on('error', (error) => {
            console.error('Session store error:', error);
        });

        app.use(session({
            secret: process.env.SESSION_SECRET,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
            },
            store: store,
            resave: false,
            saveUninitialized: false,
        }));

        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());


        //controllers

        app.get('/', controllerRecipe.Home);
        app.get('/api/Recipes', controllerRecipe.viewRecipe);
        app.post('/api/recipes', controllerRecipe.recieveData);
        app.get('/api/Recipes/:id', controllerRecipe.viewById);
        app.put('/api/Recipes/:id', controllerRecipe.updateRecipe);
        app.delete('/api/Recipes/:id', controllerRecipe.deleteRecipe);
        app.post('/api/signup',signup);

    app.post('/api/auth',passport.authenticate('local'),
            (req, res) => {
                res.status(200).json({ message: 'Login successful', user: req.user });
            }
        );



        app.listen(PORT, () => {
            console.log('Connected to MongoDB!');
            console.log('The server is running on port ' + PORT);
        });


    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();

