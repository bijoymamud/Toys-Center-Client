import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/All Toys/AllToys";
import Reviews from "../Pages/CustomesRe/Reviews";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/Register/SignUp";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";


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
        element: <AddToy></AddToy>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: "/toydetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toyinfo/${params.id}`)
      },
      // {
      //   path:"/mytoys",
      //   element: <MyToy></MyToy>
      // },

      {
        path: "/review",
        element: <Reviews></Reviews>
      }
    ]
  },
  {

  }
]);

export default router;