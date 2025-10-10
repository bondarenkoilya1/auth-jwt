import { create } from "zustand";
import { login, logout, register, verifyAndLogin } from "@/modules/Auth";

type AuthStoreType = {
  isAuth: boolean;
  actions: {
    setIsAuth: (status: boolean) => void;
    register: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    verifyAndLogin: (email: string, password: string, code: string) => void;
    logout: () => void;
  };
};

const useAuthStore = create<AuthStoreType>((set) => ({
  isAuth: false,
  actions: {
    setIsAuth: (status) => set({ isAuth: status }),
    register: async (email, password) => {
      const response: unknown = await register(email, password);
      console.log(response);
    },
    verifyAndLogin: async (email, password, code) => {
      const response: unknown = await verifyAndLogin(email, password, code);
      console.log(response);
    },
    login: async (email, password) => {
      const response: unknown = await login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.access);
      set({ isAuth: true });
    },
    logout: async () => {
      await logout();
      localStorage.removeItem("token");
      set({ isAuth: false });
    }
  }
}));

export const useUser = (): UserType | null => useAuthStore((state) => state.user);
export const useAuthStatus = () => useAuthStore((state) => state.isAuth);
export const useAuthActions = (): AuthStoreType["actions"] =>
  useAuthStore((state) => state.actions);
