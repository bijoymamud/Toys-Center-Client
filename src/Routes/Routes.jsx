import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddToy from "../Pages/AddToy/AddToy";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/Register/SignUp";


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
      }
    ]
  },
  {

  }
]);

export default router;