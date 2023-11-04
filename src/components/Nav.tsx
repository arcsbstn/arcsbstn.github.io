import { useContext } from "react";
import styled from "styled-components";

import { MediaWidthContext, ThemeContext } from "../ResumePortfolio";
import { rgbThemeColors } from "../constants";
import { ITheme } from "../interfaces";
import { getRgbColor } from "../utils";

const NavWrapper = styled.div<{ isExtraLargeView: boolean; theme: ITheme }>`
  padding: 1.5em 2em !important;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  justify-content: space-between;
  background-color: rgba(${(props) => getRgbColor(props.theme, "bg")}, 0.75);
  border-bottom: 1px dotted
    rgba(${(props) => getRgbColor(props.theme, "text")}, 0.5);
  width: ${(props) => (props.isExtraLargeView ? "1100px" : "100%")};
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export function Nav() {
  const { isExtraLargeView } = useContext(MediaWidthContext);
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <NavWrapper isExtraLargeView={isExtraLargeView} theme={theme}>
      <div></div>
      <NavUl>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li
          onClick={() => {
            setTheme(({ index }: ITheme) => ({
              ...rgbThemeColors,
              index: index < rgbThemeColors.length - 1 ? index + 1 : 0,
            }));
          }}
        >
          🔴
        </li>
      </NavUl>
    </NavWrapper>
  );
}
