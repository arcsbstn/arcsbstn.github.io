import { ITheme } from "../interfaces";
import { rgbThemeColors } from "../constants";

export const getRgbColor = (theme: ITheme, key: "accent" | "bg" | "text") => {
  const { index } = theme;
  return rgbThemeColors[index][key];
};
