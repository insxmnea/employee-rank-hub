import { TOKEN_LOCALSTORAGE_KEY } from "@shared/const/localStorage";
import { create } from "zustand";

interface AuthStore {
  name?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthData: (authData: string) => void;
  initialize: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  name: "test name",
  isAuthenticated: false,
  isLoading: true,
  setAuthData: (authData) => {
    set({ isAuthenticated: !!authData });
    localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, authData);
  },
  initialize: () => {
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);

    if (token) {
      set({ isAuthenticated: true });
    }
    set({ isLoading: false });
  },
  logout: () => {
    set({ isAuthenticated: false });
    localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
  },
}));
