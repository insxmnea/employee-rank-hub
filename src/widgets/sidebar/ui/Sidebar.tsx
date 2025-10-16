import { classnames } from "@shared/lib/classnames";
import * as styles from "./Sidebar.module.scss";
import { useState } from "react";
import { Button } from "@shared/ui/Button";
import { ThemeSwitcher } from "@widgets/theme-switcher";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classnames(styles.Sidebar, { [styles.collapsed]: collapsed })}
    >
      <ThemeSwitcher />
      <Button onClick={onToggle}>Toggle</Button>
    </div>
  );
};
