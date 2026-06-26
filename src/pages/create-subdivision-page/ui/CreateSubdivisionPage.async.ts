import { lazy } from "react";

export const CreateSubdivisionPageAsync = lazy(
  () => import("./CreateSubdivisionPage"),
);
