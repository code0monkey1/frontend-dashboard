import { useStore } from "../store"

function DashBoard() {
  
  const {user} = useStore()

  return (
    <>
    <h2>User {user?.firstName} is logged on</h2>
    </>
  )
}

export default DashBoard