import { lazy } from "react";

export const WeightsSettingsPageAsync = lazy(
  () => import("./WeightsSettingsPage"),
);
