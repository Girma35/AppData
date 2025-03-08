import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Search from './Search';

const Login = () => {
    const navigate=useNavigate();
  
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputs);
        alert(`SUCCESS! Login! Let's start sharing and discovering recipes! `);
        navigate('/Dashboard')
    };

    return (
        <div className="bg-purple-300 pt-24 h-screen">
            <div className="justify-around h-8 w-[500px] bg-white m-auto flex flex-row">
                <div className="text-xs pt-2"><p> <Link to="/Login">Login</Link>|  <Link to="/">sign up</Link></p></div>
                <div><h2>AppData</h2></div>
                <div className="flex text-sm mt-2 bg-slate-100 text-center w-[100px] h-[20px]"> <Search/></div>
            </div>
            <div className="w-[500px] h-[450px] pl-5 bg-rose-400 m-auto pt-5">
                <div className="bg-white h-auto w-80">
                    <h1 className="text-left ml-6 font-bold mt-2 text-black mb-9 text-2xl">Login</h1>
                    <form onSubmit={submitHandler}>
                        <label htmlFor="username" className="ml-8 font-bold">Username:
                            <input
                                type="text"
                                name="username"
                                className="my-auto mb-5 ml-8 bg-stone-200 m-2 text-center border-solid"
                                placeholder="Enter username..."
                                required
                                value={inputs.username}
                                onChange={changeHandler}
                            /><br />
                        </label>
                        <label htmlFor="password" className="ml-8 font-bold">Enter your password:
                            <input
                                type="password"
                                name="password"
                                className="my-auto mb-3 ml-8 m-2 bg-stone-200 text-center"
                                placeholder="Enter your password..."
                                required
                                value={inputs.password}
                                onChange={changeHandler}
                            /><br />
                        </label>
                        <button type="submit" className="h-auto w-20 ml-9 text-center bg-orange-400 m-2 text-black">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;