import "./App.css";
import Home from "./Components/Home/Home";
import All from "./Components/All/All";
import Platform from "./Components/Platform/Platform";
import Sortby from "./Components/Sortby/Sortby";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import {  createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import Joinfree from "./Components/Joinfree/Joinfree";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Gamedetails from "./Components/Gamedetails/Gamedetails";

function App() {
 useEffect(()=>{
  if (localStorage.getItem('tokenData')!= null ) {
    saveUserData()
  }
 }, [])

 function logOut() {
  localStorage.removeItem('tokenData');
  setUserData(null)
  
 }

 

  const [userData, setUserData] = useState(null);

  

  function saveUserData() {
    let incodedData = localStorage.getItem("tokenData");

    let decodedData = jwtDecode(incodedData);
    setUserData(decodedData);
  }

  function ProtectedRoute(props) {
    
    if (userData === null && localStorage.getItem('tokenData')=== null) {
     return <>
     
     <Navigate to="/Login"/>
    
     </>
    }else{
     return <>
      {props.children}
     
     </>
    }
    }

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout userData={userData} logOut={logOut}/>,
      children: [
        { path: "/", element:<ProtectedRoute><Home /></ProtectedRoute>   },
        { path: "joinfree", element: <Joinfree />  },
        { path: "all", element:<ProtectedRoute><All /></ProtectedRoute>  },
        { path: "platform", element:<ProtectedRoute><Platform /> </ProtectedRoute>,children:[
          {path:":params"},
         
        ] },
        { path: "sort-by", element:<ProtectedRoute><Sortby /></ProtectedRoute>,children:[
          {path:":params"},
        ] },
        { path: "categories", element:<ProtectedRoute><Categories /></ProtectedRoute>,children:[
          {path:":params"},
        ] },
        { path: "login", element: <Login saveUserData={saveUserData}  /> },
        { path: "/", element: <Joinfree /> },
        { path: "game-details", element: <ProtectedRoute><Gamedetails /></ProtectedRoute> ,children:[
          {path:":params"},
        ]},
        { path: "*", element: <Notfound /> },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
