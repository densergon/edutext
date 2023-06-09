import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";

interface authStore {
    isAuth: boolean
    role: String
    setLog: (value: boolean) => void
    setRole: (value: String) => void
}


export const useAuthStore = create(
    persist<authStore>(
        (set) => ({
            isAuth: false,
            role: "",
            setLog: (value: boolean) => set(() => ({ isAuth: value })),
            setRole: (value: String) => set(() => ({ role: value }))
        }),
        {
            name: "auth", // unique name
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);