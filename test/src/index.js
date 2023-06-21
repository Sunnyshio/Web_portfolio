import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Pages/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
    },
    {
        path: '/home',
        element: <Home />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <RouterProvider router={router} />
);
