import { Link } from "react-router";
import "./styles/index.scss";
import { classnames } from "@shared/lib/classnames";
import { Counter } from "@widgets/counter";
import { useTheme } from "./providers/theme";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Counter />
      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>

      <AppRouter />
    </div>
  );
};
