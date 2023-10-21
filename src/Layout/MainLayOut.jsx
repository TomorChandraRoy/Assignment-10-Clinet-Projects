import { Outlet } from "react-router-dom";
import Foother from "./Foother";
import Header from "../Components/Header";





const MainLayOut = () => {

    return (
        <div className="max-w-[1300px] mx-auto mt-5 font-poppins">
           
            <Header></Header>
            
            <Outlet></Outlet>
            <Foother></Foother>
        </div>
    );
};

export default MainLayOut;