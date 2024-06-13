import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout.tsx';
import Tasks from './pages/Tasks/Tasks.tsx';
import Completed from './pages/Completed/Completed.tsx';
import Calendar from './pages/Calendar/Calendar.tsx';
import Notes from './pages/Notes/Notes.tsx';
import { Error } from './pages/Error/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/tasks',
        element: <Tasks />,
      },
      {
        path: '/completed',
        element: <Completed />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
