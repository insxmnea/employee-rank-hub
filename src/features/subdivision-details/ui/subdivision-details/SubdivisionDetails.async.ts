import { lazy } from "react";

export const SubdivisionDetailsAsync = lazy(
  () => import("./SubdivisionDetails"),
);
