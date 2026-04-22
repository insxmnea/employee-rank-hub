type Mods = Record<string, boolean | string>;

export const classnames = (
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(" ")
    .trim();
};
