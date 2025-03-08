
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Search from "./Search"; 
import EditAndDelete from "./EditAndDelete";
const Showpage = () => {
    return (
        <div className="bg-purple-300 w-full min-h-screen p-4 ">
             <div className="w-full bg-white h-20 border flex items-center justify-between px-4">
                <p className="text-sm">Wellcome AppData</p>
                <h1 className="text-center text-xl font-bold">AppData</h1>

                <div className="flex bg-slate-100 p-2 rounded">
                    
                    <Search />
                 </div>
                <div className="float-end ml-2"><p className="">Logout</p></div>
            </div>
            <div className="w-full p-[20px] max-w-[1480px] h-[1040px] bg-rose-400 mx-auto ">
            
                <div className="w-full  max-w-[1300px] h-[1000px] bg-white mx-auto  text-black">
                   <div className="ml-7 pt-4 flex gap-2 font-bold" > <FaArrowLeft className="flex" /> <Link to="/Dashboard"> Back</Link></div>
                   <div className="float-right pt-0 pr-3"><EditAndDelete/></div>
                </div>

            </div>
        
        </div>
    );
};

export default Showpage;