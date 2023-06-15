import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";

interface authStore {
    isAuth: boolean
    id:number
    role: String
    setLog: (value: boolean) => void
    setId:(value:number)=>void
    setRole: (value: String) => void
}


export const useAuthStore = create(
    persist<authStore>(
        (set) => ({
            isAuth: false,
            id:0,
            role: "",
            setLog: (value: boolean) => set(() => ({ isAuth: value })),
            setId:(value:number)=>set(()=>({id:value})),
            setRole: (value: String) => set(() => ({ role: value }))
        }),
        {
            name: "auth", // unique name
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);