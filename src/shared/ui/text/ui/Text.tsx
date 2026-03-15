import { useTranslation } from "react-i18next";

export enum TextTheme {
  PRIMARY = "primary",
}

interface TextProps {
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const { t } = useTranslation();

  return <div>{t("Text")}</div>;
};
