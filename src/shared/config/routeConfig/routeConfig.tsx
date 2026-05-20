import { AboutPage } from "@pages/about-page";
import { CreateEmployeePage } from "@pages/create-employee-page";
import { EmployeeTablePage } from "@pages/employee-table-page";
import { LoginPage } from "@pages/login-page";
import { MainPage } from "@pages/main-page";
import { NotFoundPage } from "@pages/not-found-page";
import { RankPage } from "@pages/rank-page";
import { MainLayout, PrivateLayout } from "@widgets/layouts";
import { RouteObject } from "react-router";

export enum AppRoutes {
  MAIN = "main",
  RANK = "rank",
  CREATE_EMPLOYEE = "create_employee",
  EMPLOYEE_TABLE = "employee_table",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  LOGIN = "login",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RANK]: "/rank",
  [AppRoutes.CREATE_EMPLOYEE]: "/create_employee",
  [AppRoutes.EMPLOYEE_TABLE]: "/employee_table",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutePath.main,
        element: <MainPage />,
      },
      {
        path: RoutePath.rank,
        element: <RankPage />,
      },
      {
        path: RoutePath.create_employee,
        element: <CreateEmployeePage />,
      },
      {
        path: RoutePath.employee_table,
        element: <EmployeeTablePage />,
      },
      {
        path: RoutePath.about,
        element: <AboutPage />,
      },
      {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: RoutePath.login,
        element: <LoginPage />,
      },
    ],
  },
];
