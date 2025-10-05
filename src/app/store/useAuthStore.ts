import { create } from "zustand";
import { login, logout, register } from "@/modules/Auth";

type AuthStoreType = {
  user: unknown;
  isAuth: boolean;
  isLoading: boolean;
  actions: {
    setIsAuth: (status: boolean) => void;
    setIsLoading: (status: boolean) => void;
    setUser: (user: unknown) => void;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
  };
};

const useAuthStore = create<AuthStoreType>((set) => ({
  user: {},
  isAuth: false,
  isLoading: false,
  actions: {
    setIsAuth: (status) => set({ isAuth: status }),
    setIsLoading: (status) => set({ isLoading: status }),
    setUser: (user) => set({ user }),
    login: async (email, password) => {
      const response: unknown = await login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.access);
      set({ isAuth: true });
      // set({ user: response.data.user });
    },
    register: async (email, password) => {
      const response: unknown = await register(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.access);
      set({ isAuth: true });
      // set({ user: response.data.user });
    },
    logout: async () => {
      await logout();
      localStorage.removeItem("token");
      set({ isAuth: false, user: {} });
    }
  }
}));

export const useUser = () => useAuthStore((state) => state.user);
export const useAuthStatus = () => useAuthStore((state) => state.isAuth);
export const useAuthActions = (): AuthStoreType["actions"] =>
  useAuthStore((state) => state.actions);
