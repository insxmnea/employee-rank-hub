import { useAuthStore } from "@entities/auth";
import { RoutePath } from "@shared/config/routeConfig";
import { JSX } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) return null;
  if (!isAuthenticated) return <Navigate to={RoutePath.login} />;

  return children;
};
