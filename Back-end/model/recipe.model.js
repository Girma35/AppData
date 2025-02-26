const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
<<<<<<< HEAD
    required: true, 
  },
  category:{
    type:String,
    required : true,
=======
    required: true,
  },
  category: {
    type: String,
    required: true,
>>>>>>> Back-end
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
<<<<<<< HEAD
    required: true, 
  },
  instructions: {
    type: [String], 
    required: true, 
  },
  imageUrl: {
    type: String, 
  },
  authorId: {
    type: String, 
  },
  dateCreated: {
    type: Date,
    default: Date.now, 
=======
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
  },
  authorId: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
>>>>>>> Back-end
  },
  dateModified: {
    type: Date,
    default: Date.now,
  },
  tags: {
<<<<<<< HEAD
    type: [String], 
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
=======
    type: [String],
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
>>>>>>> Back-end
