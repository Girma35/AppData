import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const SearchBar = ({ setResult }) => {
    const [searchitem, setSearchItem] = useState('');
    const API_URL = "https://jsonplaceholder.typicode.com/users";

    const userData = (value) => {
        axios(API_URL).then(res => {
            const result = res.data.filter(user => {
                return user && user.name && user.name.toLowerCase().includes(value);
            });
            setResult(result); 
            console.log(result);
        }).catch(err => {
            console.error("Error fetching data:", err);
        });
    };

    const handelSearch = (value) => {
        setSearchItem(value);
        userData(value.toLowerCase()); 
        console.log('Searching for:', value);
    };

    return (
        <div className="flex">
            <CiSearch className='ml-1 font-900 mr-1 mt-1 text-sm text-center' />
            <input
                type="text"
                name="search"
                placeholder="search"
                onChange={(e) => handelSearch(e.target.value)}
                value={searchitem} 
                className="mt-1 placeholder:text-gray-500 text-black text-center w-[90px] h-[15px] outline-none bg-slate-100 border-none"
            />
        </div>
    );
};

export default SearchBar;