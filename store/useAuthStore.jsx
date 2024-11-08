import { create } from "zustand";
import { persist } from "zustand/middleware";

let index = persist(
    (set) => ({
        token: null,
        setToken: (token) => set((state) => ({ ...state, token })),
        refreshToken: null,
        setRefreshToken: (refreshToken) =>
            set((state) => ({ ...state, refreshToken })),
    }),
    { name: "auth" },
);
export const useAuthStore = create(index);