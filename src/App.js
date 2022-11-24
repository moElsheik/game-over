import "./App.css";
import Home from "./Components/Home/Home";
import All from "./Components/All/All";
import Platform from "./Components/Platform/Platform";
import Sortby from "./Components/Sortby/Sortby";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} logOut={logOut}/>,
      children: [
        { path: "/", element: <Home />  },
        { path: "joinfree", element: <Joinfree />  },
        { path: "all", element:<All />  },
        { path: "platform", element:<Platform /> ,children:[
          {path:":params"},
         
        ] },
        { path: "sort-by", element:<Sortby />,children:[
          {path:":params"},
        ] },
        { path: "categories", element:<Categories />,children:[
          {path:":params"},
        ] },
        { path: "login", element: <Login saveUserData={saveUserData}  /> },
        { path: "/", element: <Joinfree /> },
        { path: "game-details", element: <Gamedetails /> ,children:[
          {path:":params"},
        ]},
        { path: "*", element: <Notfound /> },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
