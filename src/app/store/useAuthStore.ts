import { create } from "zustand";

type AuthStoreType = {
  isAuth: boolean;
  isVerificationRequested: boolean;
  actions: {
    setIsAuth: (status: boolean) => void;
    setIsVerificationRequested: (status: boolean) => void;
  };
};

const useAuthStore = create<AuthStoreType>((set) => ({
  isAuth: false,
  isVerificationRequested: false,
  actions: {
    setIsAuth: (status) => set({ isAuth: status }),
    setIsVerificationRequested: (status) => set({ isVerificationRequested: status })
  }
}));

export const useAuthStatus = () => useAuthStore((state) => state.isAuth);
export const useVerificationStatus = () => useAuthStore((state) => state.isVerificationRequested);
export const useAuthActions = (): AuthStoreType["actions"] =>
  useAuthStore((state) => state.actions);
