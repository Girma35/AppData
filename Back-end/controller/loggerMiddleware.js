const Recipe = require('../model/recipe.model')

function Home(req,res){
    res.send('welcome to nodejs application');
    }


async function viewRecipe  (req, res){
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
  }


async function viewById (req, res) {
    try {
       
     const id = req.params.id.trim();
       const recipes = await Recipe.findById(id);
       if (! recipes){
         return res.status(500).json({message:'The recipes is not found'})
       }
       res.status(200).json(recipes);
     } catch (error) {
       if (error.name === 'ValidationError') {
         res.status(400).json({ message: "Validation error", errors: error.errors });
       } else {
         res.status(500).json({ message: "Internal server error", error: error.message });
       }
     }
   
   }



  async function recieveData (req, res){
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
  }


  async function updateRecipe (req, res){
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
  }

  async function deleteRecipe (req, res) {
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
  }


  async function Search(req, res) {
    console.log('in the search route');
  
    try {

      const title = req.body.title?.trim();

      if (!title) {
        return res.status(400).json({ error: 'Title query parameter is required' });
      }


     const resultRecipe = await Recipe.find({
      title: { $regex: title, $options: 'i' }
    });
  

     if (resultRecipe.length === 0) {
      return res.status(400).json({ error: 'No recipe was found' });
    }

    res.status(200).json(resultRecipe);

    } catch (error) {

      console.error('Search error:', error);
      res.status(500).json({ error: 'Server error' });

    }
  }


module.exports = {
  Home,
  viewRecipe,
  viewById,
  recieveData,
  updateRecipe,
  deleteRecipe,
  Search,
};