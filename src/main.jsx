import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Layout/MainLayOut';
import ErrorPage from './Components/ErrorPage';
import LogIn from './Components/LogIn';
import Banner from './Components/Banner';
import AddProduct from './Components/AddProduct';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import AuthPeovider from './Provider/AuthPeovider';
import PrivateRoute from './Routes/PrivateRoute';
import BrandDetails from './Components/BrandDetails';
import MyCart from './Components/MyCart';
import Terms from './Components/Terms';
import AboutUs from './Components/AboutUs';
import UpdateProduct from './Components/UpdateProduct';
import BrandProducts from './Components/BrandProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch("https://technology-and-electronics-server-sigma.vercel.app/brand"),
        
      },
      {
        path: "/addproducts",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params})=> fetch(`https://technology-and-electronics-server-sigma.vercel.app/brandproducts/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch('https://technology-and-electronics-server-sigma.vercel.app/cardproducts')
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/banner",
        element: <Banner></Banner>
      },
      {
        path: "/brand/:id",
        element: <BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`https://technology-and-electronics-server-sigma.vercel.app/brand/${params.id}`)
        
      },
      
      {
        path:"/brandetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({params})=>fetch(`https://technology-and-electronics-server-sigma.vercel.app/brandproducts/${params.id}`)
        
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
   

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPeovider>
      <RouterProvider router={router} />
    </AuthPeovider>
  </React.StrictMode>,
)
