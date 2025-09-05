import { Link, Route, Routes } from "react-router";
import "./styles/index.scss";
import { Suspense } from "react";
import { MainPage } from "@pages/main-page";
import { AboutPage } from "@pages/about-page";
import { classnames } from "@shared/lib/classnames";
import { Counter } from "@widgets/counter";
import { useTheme } from "./providers/theme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Switch theme</button>
      <Counter />
      <Link to={"/"}>Main page</Link>
      <Link to={"/about"}>About page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
