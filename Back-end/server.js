const express = require('express')
const mongoose = require('mongoose');
const Recipe = require('./model/recipe.model.js')
require('dotenv').config();




// middle ware

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



PORT = 3000


// connect the database 
// function
async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
      });
      app.listen(PORT)
      console.log('Connected to MongoDB!');
      console.log('The server is running  on  port ' + PORT)

    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }


  

// calling the function
connectToDatabase()

app.get('/',(req,res) =>{
res.send('welcome to nodejs application');
}
);


app.get('/api/Recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
});



app.post('/api/recipes', async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
});



app.get('/api/Recipes/:id', async (req, res) => {
 
  try {
   const id = req.params.id.trim();
    const recipes = await Recipe.findById(id);
    res.status(200).json(recipes);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }

});



app.put('/api/Recipes/:id', async (req, res) => {
  try {
    const id = req.params.id.trim();
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'The recipe not found' });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
});



app.delete('/api/Recipes/:id', async (req, res) => {
  try {
    const id = req.params.id.trim();
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'The recipe not found' });
    }
    res.status(200).json({message:'The Recipe delted Successfully'});
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
});

