import { AboutPage } from "@pages/about-page";
import { CreateEmployeePage } from "@pages/create-employee-page";
import { EmployeeHierarchyPage } from "@pages/employee-hierarchy-page";
import { EmployeePage } from "@pages/employee-page";
import { EmployeeTablePage } from "@pages/employee-table-page";
import { LoginPage } from "@pages/login-page";
import { MainPage } from "@pages/main-page";
import { NotFoundPage } from "@pages/not-found-page";
import { RankPage } from "@pages/rank-page";
import { SubdivisionPage } from "@pages/subdivision-page";
import { SubdivisionTablePage } from "@pages/subdivision-table-page";
import { WeightsSettingsPage } from "@pages/weights-settings-page";
import { MainLayout, PrivateLayout } from "@widgets/layouts";
import { RouteObject } from "react-router";

export enum AppRoutes {
  MAIN = "main",
  RANK = "rank",
  CREATE_EMPLOYEE = "create_employee",
  EMPLOYEE_TABLE = "employee_table",
  EMPLOYEE_HIERARCHY = "employee_hierarchy",
  WEIGHTS_SETTINGS = "weights_settings",
  SUBDIVISION_TABLE = "subdivision_table",
  SUBDIVISION = "subdivision",
  EMPLOYEE = "employee",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  LOGIN = "login",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.RANK]: "/rank",
  [AppRoutes.CREATE_EMPLOYEE]: "/create_employee",
  [AppRoutes.EMPLOYEE_TABLE]: "/employee_table",
  [AppRoutes.EMPLOYEE_HIERARCHY]: "/employee_hierarchy",
  [AppRoutes.WEIGHTS_SETTINGS]: "/weights_settings",
  [AppRoutes.SUBDIVISION_TABLE]: "/subdivision_table",
  [AppRoutes.SUBDIVISION]: "/subdivision",
  [AppRoutes.EMPLOYEE]: "/employee",
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
        path: `${RoutePath.employee}/:employeeId`,
        element: <EmployeePage />,
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
        path: RoutePath.subdivision_table,
        element: <SubdivisionTablePage />,
      },
      {
        path: `${RoutePath.subdivision}/:subdivisionId`,
        element: <SubdivisionPage />,
      },
      {
        path: RoutePath.employee_hierarchy,
        element: <EmployeeHierarchyPage />,
      },
      {
        path: RoutePath.weights_settings,
        element: <WeightsSettingsPage />,
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
