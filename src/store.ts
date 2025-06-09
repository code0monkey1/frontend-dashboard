import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Tenant={
    id:number,
    name:string,
    address:string
}

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  role: string
  tenant?:Tenant
}

type Store = {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<Store>()(devtools((set) => ({
  user:null,
  setUser: (user: User) => set({user}),
  logout: () => set({user: null})
})))
