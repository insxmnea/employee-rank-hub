import { queryOptions } from "@tanstack/react-query";
import { getSubdivisions } from "./getSubdivisions";

export const subdivisionQueries = {
  all: () => ["subdivisions"],

  allSubdivisions: () =>
    queryOptions({
      queryKey: [...subdivisionQueries.all(), "all"],
      queryFn: () => getSubdivisions(),
    }),

  subdivision: (id: number) =>
    queryOptions({
      queryKey: [...subdivisionQueries.all(), "subdivision", id],
      queryFn: () => {},
    }),
};
