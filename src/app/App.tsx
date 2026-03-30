import { classnames } from "@shared/lib/classnames";
import { useTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import { Suspense, useEffect } from "react";
import { useAuthStore } from "@entities/auth";

export const App = () => {
  const { theme } = useTheme();
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className={classnames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
