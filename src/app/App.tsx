import "./styles/index.scss";
import { classnames } from "@shared/lib/classnames";
import { useTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar />

      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
