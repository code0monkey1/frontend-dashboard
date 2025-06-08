import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../store"

function NoAuth() {
  
 const {user} = useAuthStore()

  if(user){
      return <Navigate to={'/'}  replace={true} /> // if user is present, sent the user to the dashboard 
  }

  return (
    <>
    <h4>Non-Auth Component</h4>
    <div><Outlet/></div>
    </>
  )
}

export default NoAuth