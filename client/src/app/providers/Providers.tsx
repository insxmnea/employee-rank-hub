import { FC, PropsWithChildren } from "react";
import { QueryProvider } from "./query-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
