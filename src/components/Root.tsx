import { useQuery } from "@tanstack/react-query"
import { Outlet } from "react-router-dom"
import { getSelf } from "../http/api"
import { useEffect } from "react"
import { useAuthStore } from '../store';
import { AxiosError } from "axios";

function Root() {
     
    const {setUser}  = useAuthStore()

    // get the self info, if cookies are present
    const {data,isLoading} = useQuery({
    queryKey:["self"],
    queryFn:getSelf,
    retry:(failureCount:number, error)=>{
          if(error instanceof AxiosError && error.response?.status===401){ // the 401 ( auth/ self => refresh ) 
            // case has already been taken care of 
            // so no need to retry for this error , as it's already beig retried
            // this will quickly bring us to the login page , in case the user auth fails 
            // and wont waste a lot of time doing multiple retries , as that won't result in anything
            return false
        }
        // for all other errors got by `getSelf` query,  retry at least 3 times
        return failureCount<3
    },

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