const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength : [100,'The title must be at most 100 character'],
    minlentgh : [4,'The title must be atleast 4 charachter']
  },

  category: {
    type: String,
    required: true,
    enum: {
      values: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Appetizer', 'Snack', 'Beverage', 'Side Dish', 'Main Course', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'French', 'American', 'Baking', 'Healthy', 'Quick & Easy', 'Holiday'],
      message: 'Invalid category. Please select from the following options: [' + ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Appetizer', 'Snack', 'Beverage', 'Side Dish', 'Main Course', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'French', 'American', 'Baking', 'Healthy', 'Quick & Easy', 'Holiday'].join(', ') + ']'
    }
  },

  description: {
    type: String,
    required: true,
    maxlength : [100,'The title must be at most 100 character'],
    minlentgh : [4,'The title must be atleast 4 charachter']
  },


  ingredients: {
    type: [String],
    required: true,
    validate: {
        validator: function (ingredients) {
            const unhealthyPatterns = [/sugar/i, /processed/i, /fried/i]; // Array of regular expressions (case-insensitive)

            for (const ingredient of ingredients) {
                for (const pattern of unhealthyPatterns) {
                    if (pattern.test(ingredient)) {
                        return false;
                    }
                }
            }
            return true;
        },
        message: 'Ingredients must be for a healthy recipe.',
    },
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

  },
  dateModified: {

    type: Date,
    default: Date.now,

  },
  tags: {
    
    type: [String],

  },
  
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

