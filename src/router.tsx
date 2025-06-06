import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import NoAuth from "./components/NoAuth";
import Auth from "./components/Auth";
import DashBoard from "./components/DashBoard";
import Root from "./components/Root";

export  const router = createBrowserRouter([

    {
      path:'/',
      element:<Root/>,
      children:[
                { 
            path:"/",
            element:<Auth/>,
            children:[
                        {
                            path: '',
                            element: <DashBoard />
                        }
                     ]
                 },
            
                {
                path:"/auth",
                element:<NoAuth/>,
                children:[
                    {
                        path:"login",
                        element:<Login/>,
                    }
                ]
                },
      ]
    },
  
])