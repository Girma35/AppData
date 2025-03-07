import ChooseItem from "./ChooseItem";
import Search from "./Search"; 

const Dashboard = () => {
    return (
        <div className="bg-purple-300 w-full min-h-screen p-4">
         
            <div className="w-full bg-white h-20 border flex items-center justify-between px-4">
                <p className="text-sm">Wellcome AppData</p>
                <h1 className="text-center text-xl font-bold">AppData</h1>
                <div className="float-end ml-2">  <p className="">Logout</p></div>
                <div className="flex bg-slate-100 p-2 rounded">
                    
                    <Search />
                </div>
            </div>

            
            <div className="w-full max-w-[1480px] h-auto bg-rose-400 mx-auto mt-4">
               
                <div className="flex mt-10 p-2 m-auto bg-white text-black w-full max-w-[1480px]">
                    <ChooseItem />
                </div>

             
                <div className="m-auto justify-around grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                    
                    <div className="mt-10 bg-white text-black w-full sm:w-[305px] h-[521px] mx-auto sm:mx-0">
                        <div className="h-[273px] w-full text-center flex items-center justify-center bg-gray-200">
                            Food picture
                        </div>
                        <div className="h-[273px] w-full bg-gray-100 p-4">
                            <h1 className="text-xl font-bold">Title</h1>
                            <h3 className="text-gray-600">Description</h3>
                            <p className="mt-[150px] text-gray-500">Submitted by</p>
                        </div>
                    </div>

                  
                    <div className="mt-10 bg-white text-black w-full sm:w-[305px] h-[521px] mx-auto sm:mx-0">
                        <div className="h-[273px] w-full text-center flex items-center justify-center bg-gray-200">
                            Food picture
                        </div>
                        <div className="h-[273px] w-full bg-gray-100 p-4">
                            <h1 className="text-xl font-bold">Title</h1>
                            <h3 className="text-gray-600">Description</h3>
                            <p className="mt-[150px] text-gray-500">Submitted by</p>
                        </div>
                    </div>

                 
                    <div className="mt-10 bg-white text-black w-full sm:w-[305px] h-[521px] mx-auto sm:mx-0">
                        <div className="h-[273px] w-full text-center flex items-center justify-center bg-gray-200">
                            Food picture
                        </div>
                        <div className="h-[273px] w-full bg-gray-100 p-4">
                            <h1 className="text-xl font-bold">Title</h1>
                            <h3 className="text-gray-600">Description</h3>
                            <p className="mt-[150px] text-gray-500">Submitted by</p>
                        </div>
                    </div>

                 
                    <div className="mt-10 bg-white text-black w-full sm:w-[305px] h-[521px] mx-auto sm:mx-0">
                        <div className="h-[273px] w-full text-center flex items-center justify-center bg-gray-200">
                            Food picture
                        </div>
                        <div className="h-[273px] w-full bg-gray-100 p-4">
                            <h1 className="text-xl font-bold">Title</h1>
                            <h3 className="text-gray-600">Description</h3>
                            <p className="mt-[150px] text-gray-500">Submitted by</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;