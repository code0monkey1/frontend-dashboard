import { useQuery } from "@tanstack/react-query"
import { Outlet } from "react-router-dom"
import { getSelf } from "../http/api"
import { useEffect } from "react"
import { useStore } from '../store';

function Root() {
     
    const {setUser}  = useStore()

    // get the self info, if cookies are present
    const {data,isLoading} = useQuery({
    queryKey:["self"],
    queryFn:getSelf
    
  })

  useEffect(()=>{
     
    if(data){
        setUser(data)
    }
       
  },[data,setUser])
    

  if(isLoading){
    return <h2>Loading ... </h2>
  }

  return (
    <Outlet/>
  )
}

export default Root