import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import { useState } from 'react';
const Search = () => {
    const [result,setResult]=useState('');
    return (
        <div>
               <SearchBar setResult={setResult}/>
               <SearchResult result={result}/>
        </div>
    );
};

export default Search;