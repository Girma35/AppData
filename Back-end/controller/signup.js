const express = require('express');
const router = express.Router();
const Users = require('../model/user.model');
const bcrypt = require('bcrypt');

async function signup(req, res) {
    try {
        const { username, password } = req.body;
        const existingUser = await Users.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken.' });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = new Users({
            username: username,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully.' });
    }

    catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'An error occurred during signup.' });
    }
}

module.exports = signup;