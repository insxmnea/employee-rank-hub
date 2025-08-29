type Mods = Record<string, boolean | string>;

const obj: Mods = {
  "123": true,
  "12": "sdf",
};

export const classnames = (
  cls: string,
  mods: Mods,
  additional: string[]
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
