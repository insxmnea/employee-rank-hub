import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import { Header } from "src/widgets/header";
import { Footer } from "src/widgets/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </main>
  );
};
