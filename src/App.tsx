import { Link, Route, Routes } from "react-router";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classnames } from "./shared/lib/classnames";
import { AboutPageAsync } from "@pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "@pages/MainPage/MainPage.async";

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
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
