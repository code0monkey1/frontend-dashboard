import { api } from './client'

import type { LoginCreadentials } from '../types'

export const loginUser=async(loginCredentials: LoginCreadentials)=>{
    
  const {data} = await api.post('/auth/login',loginCredentials)
  
  return data
}
