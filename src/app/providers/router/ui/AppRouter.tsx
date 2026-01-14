import { routeConfig } from "@shared/config/routeConfig";
import { PageLoader } from "@widgets/page-loader";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<div className="page-wrapper">{route.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
