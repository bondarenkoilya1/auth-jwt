import { create } from "zustand";

type AuthStoreType = {
  isAuth: boolean;
  actions: {
    setIsAuth: (status: boolean) => void;
  };
};

const useAuthStore = create<AuthStoreType>((set) => ({
  isAuth: false,
  actions: {
    setIsAuth: (status) => set({ isAuth: status })
  }
}));

export const useAuthStatus = () => useAuthStore((state) => state.isAuth);
export const useAuthActions = (): AuthStoreType["actions"] =>
  useAuthStore((state) => state.actions);
