import { useState } from "react";
import Search from './Search';
import ChooseItem from "./ChooseItem";


const NewRecipePages = () => {
    const [inputs,setInput]=useState({
       title:"",
       category:"" ,
       description:"",
       ingridents:"",
       instruction:"",
       files:""
    });
    const changehandler=(e)=>{
       const {name,value}=e.target
       setInput(values=>({...values,[name]:value }));
    }

    const submithandler=(e)=>{
        e.preventDefault()
        console.log(inputs);
        alert("THE SUCCESSFULL CREATED!");
    }
    return (
       <div className="bg-purple-300 h-fit pt-40">
        
        <div className="w-80 pt-20 m-auto">
        
            
            <div className="w-80 bg-white h-20  border">
            <p className="float-left text-sm">Wellcome AppData</p>
            <h1 className="text-center mt-6  ">AppData</h1>
            <div className="float-right flex bg-slate-100 mr-1 "> <Search/></div>
            <div className="float-left">
                <p className="text-xs font-bold">create new recipe</p></div>
            </div>

            <div className="w-80 bg-slate-100 h-12 border">
                <p className="text-xs ml-2 flex text-justify items-center">
                    <ChooseItem/>
                </p>

            </div>
            <div className="border-8 flex flex-col border-solid bg-white border-custom-red m-auto w-80  p-auto">
            <h1 className="text-center m-2 font-bold text-3xl text-black">Create New Recipe?</h1>
            <form onSubmit={submithandler} className="m-4">
                <label htmlFor="">  Title:<br/>
                    <input name="title" type="text" className=" bg-stone-200 my-auto mb-3 pl-2 " 
                    placeholder="Enter title..." required 
                    onChange={changehandler} value={inputs.title}/><br/>
                </label>
                <label htmlFor="">  Category:
                    <input name="category" type="text" className=" bg-stone-200 my-auto mb-3 pl-2" 
                    placeholder="Enter cuisine tyle..." required 
                    onChange={changehandler} value={inputs.category}/><br/>

                </label>
                <label htmlFor="">  Description:
                    <textarea name="description" type="text" className=" bg-stone-200 my-auto  w-60 mb-3 pl-2 " 
                    placeholder="Enter description..." required 
                    onChange={changehandler} value={inputs.description}/><br/>
                </label>
                <label htmlFor="">  Ingridents:
                    <textarea  name="ingridents" type="text" className=" bg-stone-200 my-auto mb-3 w-60 pl-2 " 
                    placeholder="Enter ingridents..." required 
                    onChange={changehandler} value={inputs.ingridents}/><br/>
                </label>
                <label htmlFor="">  Instructions:
                    <textarea  name="instructions" type="text" className=" bg-stone-200 my-auto mb-3 w-60 pl-2 " 
                    placeholder="Enter instructions..." required 
                    onChange={changehandler} value={inputs.instructions}/><br/>
                </label>
                <label htmlFor="">  Upload files:
                    <input name="files" type="file" className=" bg-stone-300 my-auto mb-3 w-60 pl-2 " 
                    placeholder="upload files" 
                    onChange={changehandler} value={inputs.files}/>
                </label>
                <button className="  bg-orange-300 text-black text-center w-24 font-bold  " >Create</button>

            </form>

        </div>
        </div>
       </div>
    );
};

export default NewRecipePages;