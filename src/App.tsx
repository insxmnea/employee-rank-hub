import { Link, Route, Routes } from "react-router";
import { Counter } from "./components/Counter";
import "./index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
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
