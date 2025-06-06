import axios from 'axios'
import { useStore } from '../store'

export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_API_URL,
    withCredentials:true, // to send cookies from client with every request to the backend 
    // and also used to store cookies in the client while logging in using the backend
    headers:{
        'Content-Type':'application/json', // this informs the backend that the info will be sent to it in json format
        Accept:"application/json" // this informs that the client will accept response info in json format
    }
})

const refresh=async()=>{  

    // this is made on a separate axios instance ( not the api instance ) so as to not pollute the `originalRequest` 
    // variable in the `api response interceptor` 

        await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/auth/refresh`,{
            withCredentials:true // very important to enable this , else the tokens will not be sent
        })
}

api.interceptors.response.use((response)=> response,async(error)=>{
     
       const originalRequest = error.config; // error.config stores the information of the last request made ( the request body, the headers etc .. )
      console.log("The original request is ",JSON.stringify(originalRequest,null,2))
       if(error.response.status===401 && !originalRequest._hasRetried){ // we will check for the status code we're interested here
            try{ 
                    originalRequest._hasRetried = true
                    const headers = {...originalRequest.headers}
                    // use refresh to get new pair of accessTokens and refreshToken
                    await refresh()  
                    // retry the last request made 
                    return api.request({
                            ...originalRequest,
                            headers
                        })

            }catch(err){
                console.error("Error getting refresh token",err)
                // empty the zustand store
                useStore.getState().logout() // you need to logout from the client side 
                return Promise.reject(err) // you need to return a rejected promise , so that the error handler can handler it
            }
           
        }
        return Promise.reject(error) // this is returning any other type of error that might have occured other than a 401 error
})