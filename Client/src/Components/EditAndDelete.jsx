import { Link } from "react-router-dom";
const EditAndDelete = () => {
    return (
        <div className="flex gap-2 flex-col ">
        <div className=" text-center w-[150px] h-[25px] bg-purple-300 text-black">
            <Link to="/EditPage">Edit this recipe</Link>
        </div>
        <div className="text-center w-[150px] h-[25px] bg-purple-300  text-black">
            <button>Delete this recipe</button>
        </div>
       
        </div>
    );
};

export default EditAndDelete;