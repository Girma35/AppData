import PropTypes from "prop-types";

const SearchResult = ({ result, }) => {
   

    if (result.length === 0) {
        return <div>No results found.</div>;
    }

  
    return (
        <div className="w-full px-3 flex flex-col bg-zinc-500 shadow-lg text-white rounded-lg max-h-[300px] mt-4 ml-5 overflow-y-scroll">
            {result.map((result, idx) => (
                <div key={idx}>
                    <p className="hover:bg-slate-900 text-white mt-1 cursor-pointer">
                        {result.name}</p>
                </div>
            ))}
        </div>
    );
};


SearchResult.propTypes = {
    result: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    
};

export default SearchResult;