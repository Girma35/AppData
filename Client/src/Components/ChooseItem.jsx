import { Link } from "react-router-dom";

const ChooseItem = () => {
    return (
        <div className="flex flex-wrap justify-center items-center bg-slate-100 p-2 space-x-2 space-y-2">
            <Link to="#" className="text-sm sm:text-base">latest</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">vegetarian</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">vegan</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">breakfast</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">5 ingredients</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">dinner</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">easy NewRecipePages</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">soup</Link>
            <span className="text-sm sm:text-base">|</span>
            <Link to="#" className="text-sm sm:text-base">+</Link>
        </div>
    );
};

export default ChooseItem;