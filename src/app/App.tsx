import "./styles/index.scss";
import { classnames } from "@shared/lib/classnames";
import { Counter } from "@widgets/counter";
import { useTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar />

      <button onClick={toggleTheme}>Switch theme</button>
      <Counter />

      <AppRouter />
    </div>
  );
};
