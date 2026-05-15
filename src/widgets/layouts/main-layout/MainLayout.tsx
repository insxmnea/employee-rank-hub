import { ProtectedRoute } from "@shared/ui/protected-route";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <ProtectedRoute>
      <>
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </>
    </ProtectedRoute>
  );
};
