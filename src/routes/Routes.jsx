import React from 'react';
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/SignUp';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Blogs from '../pages/blogs/Blogs';
import Resources from '../pages/resources/Resources';
import Executives from '../pages/executives/Executives';
import DashboardLayOut from '../layouts/DashboardLayOut';
import AddExecutives from '../Dashboard/AdminDashboard/pages/Members/AddExecutives';
import ManageExecutives from '../Dashboard/AdminDashboard/pages/Members/ManageExecutives';
import UpdateExecutives from '../Dashboard/AdminDashboard/pages/Members/UpdateExecutives';

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>,
            },
            {
                path:'/about',
                element: <About></About>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>,
            },
            {
                path:'/resources',
                element: <Resources></Resources>,
            },
            {
                path:'/executives',
                element: <Executives></Executives>,
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayOut></DashboardLayOut>,
        children:[
            {
                path:'/dashboard/add-executive',
                element:<AddExecutives></AddExecutives>,
            },
            {
                path:'/dashboard/manage-executive',
                element:<ManageExecutives></ManageExecutives>,
            },
            {
                path:'/dashboard/update-executive/:id',
                element:<UpdateExecutives></UpdateExecutives>,
                loader: ({params})=> fetch(`http://localhost:3000/executives/${params.id}`)
            },
            {

            }
        ]
    }
])