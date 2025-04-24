import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
};
