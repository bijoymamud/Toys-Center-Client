import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/All Toys/AllToys";
import Reviews from "../Pages/CustomesRe/Reviews";
import ConnectUs from "../Pages/GiveMessage/ConnectUs";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";

import MyToys from "../Pages/MyToys/MyToys";
import SignUp from "../Pages/Register/SignUp";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/addtoy',
        element: <PrivateRoutes> <AddToy></AddToy></PrivateRoutes>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/toyinfo/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },

      {
        path: "/review",
        element: <Reviews></Reviews>
      },
      {
        path: "/connectus",
        element: <ConnectUs></ConnectUs>
      }
    ]
  },
  {

  }
]);

export default router;