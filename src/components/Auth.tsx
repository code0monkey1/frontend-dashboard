import { Navigate, Outlet } from "react-router-dom"
import { useStore } from "../store"


function Auth() {

    // if user is not authorized direct the user to /auth path
    const {user} = useStore()

    if(user===null){
        // redirect to auth route
        return <Navigate to={"/auth/login"} replace={true} /> // replace true ensures that it does not go back to the previous route 
    }

  return (
    <>
    <h1>Auth Component</h1>
    <div><Outlet/></div>
    </>
  )
}

export default Auth