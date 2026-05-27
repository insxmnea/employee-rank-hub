import { lazy } from "react";

export const EmployeeHierarchyPageAsync = lazy(
  () => import("./EmployeeHierarchyPage"),
);
