import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  role: string
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
