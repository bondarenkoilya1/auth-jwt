import { create } from "zustand";
import { login } from "@/modules/Auth";

type AuthStoreType = {
  isAuth: boolean;
  actions: {
    setIsAuth: (status: boolean) => void;
    login: (email: string, password: string) => void;
  };
};

const useAuthStore = create<AuthStoreType>((set) => ({
  isAuth: false,
  actions: {
    setIsAuth: (status) => set({ isAuth: status }),
    login: async (email, password) => {
      const response: unknown = await login(email, password);
      console.log(response);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      localStorage.setItem("token", response.data.access);
      set({ isAuth: true });
    }
  }
}));

export const useAuthStatus = () => useAuthStore((state) => state.isAuth);
export const useAuthActions = (): AuthStoreType["actions"] =>
  useAuthStore((state) => state.actions);
