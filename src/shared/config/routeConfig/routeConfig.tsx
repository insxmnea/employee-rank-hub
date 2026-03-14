import { AboutPage } from "@pages/about-page";
import { MainPage } from "@pages/main-page";
import { NotFoundPage } from "@pages/not-found-page";
import { RankPage } from "@pages/rank-page";
import { RouteProps } from "react-router";

export enum AppRoutes {
  MAIN = "main",
  RANK = "rank",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RANK]: "/rank",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.RANK]: {
    path: RoutePath.rank,
    element: <RankPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
