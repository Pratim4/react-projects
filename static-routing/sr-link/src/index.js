import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ErrorInfo from './pages/ErrorInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
  [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'about-us',
    element: <About/>
  },
  {
    path: 'courses',
    element: <Courses/>
  },
  {
    path: 'blog',
    element: <Blogs/>
  },
  {
    path: 'blog/:id',
    element: <BlogDetails/>
  },
  {
    path:'*',
    element:<ErrorInfo />
  },

]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
