export const authQueries = {
  all: () => ["auth"],
  profile: () => [...authQueries.all(), "profile"],
};
