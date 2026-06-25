import { queryOptions } from "@tanstack/react-query";
import { getWeights } from "./getWeights";

export const weightQueries = {
  all: () => ["weights"],

  weights: () =>
    queryOptions({
      queryKey: [...weightQueries.all(), "all"],
      queryFn: () => getWeights(),
    }),
};
