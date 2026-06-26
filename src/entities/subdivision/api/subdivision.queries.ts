import { queryOptions } from "@tanstack/react-query";
import { getSubdivisions } from "./getSubdivisions";
import { getSubdivision } from "./getSubdivision";

export const subdivisionQueries = {
  all: () => ["subdivisions"],

  allSubdivisions: () =>
    queryOptions({
      queryKey: [...subdivisionQueries.all(), "all"],
      queryFn: () => getSubdivisions(),
      staleTime: 0,
    }),

  subdivision: (id: number) =>
    queryOptions({
      queryKey: [...subdivisionQueries.all(), "subdivision", id],
      queryFn: () => getSubdivision(id),
      staleTime: 0,
    }),
};
