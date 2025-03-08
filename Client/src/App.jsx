import { BrowserRouter, Routes ,Route} from "react-router-dom";
import SignInUp from "./Components/SignInUp";
import Dashboard from "./Components/Dashboard";
import NewRecipePages from "./Components/NewRecipePages";
import Login from "./Components/Login";
import ChooseItem from "./Components/ChooseItem";
import Showpage from "./Components/Showpage";
import EditPage from "./Components/EditPage";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignInUp/>} />
        
        <Route path="/login" element={<Login/>} />
        <Route path="/editpage" element={<EditPage/>} />
        <Route path="/showpage" element={<Showpage/>} />
        <Route path="/chooseitem" element={<ChooseItem/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newrecipePages" element={<NewRecipePages/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;