import { queryOptions } from "@tanstack/react-query";
import { getRecommendation } from "./getRecommendation";

export const recommendationQueries = {
  all: () => ["recommendations"],

  recommendation: (employeeId: number) =>
    queryOptions({
      queryKey: [...recommendationQueries.all(), "recommendation", employeeId],
      queryFn: () => getRecommendation(employeeId),
    }),
};
