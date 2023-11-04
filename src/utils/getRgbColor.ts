import { ITheme } from "../interfaces";

export const getRgbColor = (
  props: { theme: ITheme },
  key: "accent" | "bg" | "text"
) => {
  const { theme } = props;
  const { rgbThemeColors, index } = theme;
  return rgbThemeColors[index][key];
};
