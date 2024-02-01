import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../layout/Main";
import { Home } from "../../Pages/Home/Home";

import { Register } from "../../Pages/Copmponent/Register/Register";
import { Login } from "../../Pages/Copmponent/Login/Login";
import { AppFeatures } from "../../Pages/Copmponent/AppFeatures/AppFeatures";
import { About } from "../../Pages/Copmponent/About/About";
import { Blog } from "../../Pages/Copmponent/Blog/Blog";
import { Procrastination } from "../../Pages/Procrastination/Procrastination";
import { Email } from "../../Pages/Email/Email";
import Checkout from "../../Pages/Checkout/Checkout";


export const routes =createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/procrastination/:categoryId',
                element:<Procrastination/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/appfeatures',
                element:<AppFeatures/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/blogs',
                element:<Blog/>
            },
            {
                path:'/email',
                element:<Email/>
            },
            {
                path:'/checkout',
                element:<Checkout/>
            }
        ]
    }
])