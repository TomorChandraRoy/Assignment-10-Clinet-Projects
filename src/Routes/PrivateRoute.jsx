import { useContext } from "react";
import { AuthContext } from "../Provider/AuthPeovider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return<div className='ml-44 md:ml-80 lg:ml-[40rem]'>
                <span className="loading loading-dots loading-lg"></span>;
             </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes ={
    children:PropTypes.node
}