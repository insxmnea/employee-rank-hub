import { lazy } from "react";

export const UpdateEmployeePageAsync = lazy(
  () => import("./UpdateEmployeePage"),
);
