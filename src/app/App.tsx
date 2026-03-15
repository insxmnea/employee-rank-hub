import { classnames } from "@shared/lib/classnames";
import { useTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import { Suspense, useEffect } from "react";
import { useAppDispatch } from "./providers/StoreProvider/config/hooks";
import { userActions } from "@entities/user";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
