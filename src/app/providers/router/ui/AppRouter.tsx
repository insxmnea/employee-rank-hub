import { routeConfig } from "@shared/config/routeConfig";
import { PageLoader } from "@widgets/page-loader";
import { Suspense } from "react";
import { useRoutes } from "react-router";

export const AppRouter = () => {
  const element = useRoutes(routeConfig);

  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
};
