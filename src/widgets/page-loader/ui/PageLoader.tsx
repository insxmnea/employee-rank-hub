import { Loader } from "@shared/ui/Loader";
import * as styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={styles.PageLoader}>
      <Loader />
    </div>
  );
};
