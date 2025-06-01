import axios from 'axios'

export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_API_URL,
    withCredentials:true, // to send cookies from client with every request to the backend 
    // and also used to store cookies in the client while logging in using the backend
    headers:{
        'Content-Type':'application/json', // this informs the backend that the info will be sent to it in json format
        Accept:"application/json" // this informs that the client will accept response info in json format
    }
})