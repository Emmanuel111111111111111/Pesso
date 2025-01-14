import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { HomePage } from "./Page/Homepage/Homepage";
import { Usecasepage } from "./Page/Usecasepage/Usecasepage";
import { Featurepage } from "./Page/Featurepage/Featurepage";
import { Partnerpage } from "./Page/Partnerpage/Partnerpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path:'home', element: <HomePage/> }, 
      { path: 'usecases', element: <Usecasepage/> },
      { path: 'features', element: <Featurepage/> },
      { path: 'partner', element: <Partnerpage/> },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App;
