import { authLogin, useAuthStore } from "@entities/auth";
import { useMutation } from "@tanstack/react-query";

export const useAuthLogin = () => {
  const setAuthData = useAuthStore((state) => state.setAuthData);

  return useMutation({
    mutationFn: (data: { username: string; password: string }) => {
      return authLogin(data);
    },
    onSuccess: ({ data }) => {
      setAuthData(data.token);
    },
  });
};
