import { api } from './client'

import type { LoginCreadentials } from '../types'

export const loginUser=async(loginCredentials: LoginCreadentials)=>{
    
  const {data} = await api.post('/auth/login',loginCredentials)
  
  return data
}


export const getSelf=async()=>{
    
  const {data} = await api.get('/auth/self')
  
  return data
}

export const logoutFromServer=async()=>{

    await api.post('/auth/logout')

}

