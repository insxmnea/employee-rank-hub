import { queryOptions } from "@tanstack/react-query";
import { getProfile } from "./getProfile";

export const authQueries = {
  all: () => ["auth"],
  profile: () =>
    queryOptions({
      queryKey: [...authQueries.all(), "profile"],
      queryFn: () => getProfile(),
    }),
};
