import { useAuthStore } from "../store"

function DashBoard() {
  
  const {user} = useAuthStore()

  return (
    <>
    <h2>User {user?.firstName} is logged on</h2>
    </>
  )
}

export default DashBoard