import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: string
  phone: string
  name?: string
  email?: string
  type: "buyer" | "artisan"
  verificationStatus?: "pending" | "verified" | "rejected"
  createdAt: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: "rivayat-auth",
    },
  ),
)

// Auth utilities
export const requireAuth = (userType?: "buyer" | "artisan") => {
  const { user, isAuthenticated } = useAuthStore.getState()

  if (!isAuthenticated || !user) {
    window.location.href = "/auth"
    return false
  }

  if (userType && user.type !== userType) {
    window.location.href = "/"
    return false
  }

  return true
}

export const isArtisan = () => {
  const { user } = useAuthStore.getState()
  return user?.type === "artisan"
}

export const isBuyer = () => {
  const { user } = useAuthStore.getState()
  return user?.type === "buyer"
}
