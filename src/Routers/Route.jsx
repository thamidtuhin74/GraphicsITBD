import React from 'react';
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register.jsx/Register';
import Blog from '../Pages/Blog/Blog';
import PageNotFound from '../Pages/pageNotFound/PageNotFound';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: ()=> fetch('https://top-market-server.vercel.app/all-toys/')

        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        
        {
            path: "/*",
            element: <PageNotFound></PageNotFound>
        },
        
            
        ]
    },
  ]);

export default router;