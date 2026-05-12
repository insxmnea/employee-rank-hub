import { classnames } from "@shared/lib/classnames";
import * as styles from "./Loader.module.css";

interface LoaderProps {
  centered?: boolean;
}

export const Loader = ({ centered = false }: LoaderProps) => {
  return (
    <div
      className={classnames(styles.loader, {
        [styles.centered]: centered,
      })}
    ></div>
  );
};
