import { useState } from "react";
import Search from './Search';
import ChooseItem from "./ChooseItem";
import { useNavigate } from "react-router-dom";

const NewRecipePages = () => {
    const navigate=useNavigate();
    const [inputs, setInput] = useState({
        title: "",
        category: "",
        description: "",
        ingredients: "",
        instruction: "",
        files: ""
    });

    const changehandler = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files[0];
        setInput(values => ({ ...values, files: file }));
    };

    const submithandler = (e) => {
        e.preventDefault();
        console.log(inputs);
        alert("THE SUCCESSFULLY CREATED!");
        navigate('/Dashboard');
    };

    return (
        <div className="bg-purple-300 w-full min-h-screen p-4">
            <div className="w-full pt-10 sm:pt-20 m-auto">
              
                <div className="w-full bg-white h-20 border ">
                    <p className="float-left text-sm p-2">Welcome AppData</p>
                    <div className="flex gap-8"><h1 className="text-center md:text-3xl mt-6 ml-32">AppData</h1>
                    <div className="float-right md:block sm:hidden bg-slate-100 mr-1 m-auto">
                        <Search />
                    </div>Edit Recipe
                    </div>
                   
                    <div className="float-left  p-2">
                        <p className="text-xs font-bold">Create New Recipe</p>
                    </div>
                </div>
                    <div className="w-full sm:hidden md:block bg-gray-200 h-10 sm:h-16 border">
                    <div className="text-xs ml-3 h-full flex items-center">
                        <ChooseItem />
                    </div>
                    </div>
                            
                <div className="w-full h-auto pt-4 bg-rose-400 mx-auto pb-12">
                    <div className="w-full max-w-[1300px] h-auto bg-white mx-auto text-black p-4">
                        <h1 className="text-center m-2 font-bold text-3xl text-black">Create New Recipe</h1>
                        <form onSubmit={submithandler} className="m-4">
                         
                            <label htmlFor="title" className="block mb-4">
                                Title:
                                <input
                                    name="title"
                                    type="text"
                                    className="bg-stone-200 w-full p-2 mt-1"
                                    placeholder="Enter title..."
                                    required
                                    onChange={changehandler}
                                    value={inputs.title}
                                />
                            </label>

                         
                            <label htmlFor="category" className="block mb-4">
                                Category:
                                <input
                                    name="category"
                                    type="text"
                                    className="bg-stone-200 w-full p-2 mt-1"
                                    placeholder="Enter cuisine style..."
                                    required
                                    onChange={changehandler}
                                    value={inputs.category}
                                />
                            </label>

                          
                            <label htmlFor="description" className="block mb-4">
                                Description:
                                <textarea
                                    name="description"
                                    className="bg-stone-200 w-full p-2 mt-1"
                                    placeholder="Enter description..."
                                    required
                                    onChange={changehandler}
                                    value={inputs.description}
                                />
                                </label>
    
                  
                                <label htmlFor="ingredients" className="block mb-4">
                                    Ingred
                            </label>

              
                            <label htmlFor="ingredients" className="block mb-4">
                                Ingredients:
                                <textarea
                                    name="ingredients"
                                    className="bg-stone-200 w-full p-2 mt-1"
                                    placeholder="Enter ingredients..."
                                    required
                                    onChange={changehandler}
                                    value={inputs.ingredients}
                                />
                            </label>

                           
                            <label htmlFor="instruction" className="block mb-4">
                                Instructions:
                                <textarea
                                    name="instruction"
                                    className="bg-stone-200 w-full p-2 mt-1"
                                    placeholder="Enter instructions..."
                                    required
                                    onChange={changehandler}
                                    value={inputs.instruction}
                                />
                            </label>

                          
                            <label htmlFor="files" className="block mb-4">
                                Upload files:
                                <input
                                    name="files"
                                    type="file"
                                    className="bg-stone-300 w-full p-2 mt-1"
                                    onChange={fileChangeHandler}
                                />
                            </label>

                          
                            <button
                                type="submit"
                                className="bg-orange-300 text-black text-center w-full sm:w-24 p-2 font-bold"
                            >
                                Creacte
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRecipePages;