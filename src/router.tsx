import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import NoAuth from "./components/NoAuth";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Root from "./components/Root";
import Categories from "./pages/Categories";
import Users from "./components/Users";

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
                            element: <Home />
                        },
                        {
                            path: 'categories',
                            element: <Categories />
                        },
                         {
                            path: 'users',
                            element: <Users />
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