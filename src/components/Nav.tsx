import { useContext } from "react";
import styled from "styled-components";

import { rgbThemeColors } from "../constants";
import { ITheme } from "../interfaces";
import {
  ActiveSectionContext,
  MediaWidthContext,
  ThemeContext,
} from "../ResumePortfolio";
import { getRgbColor } from "../utils";
import { content } from "../constants";

interface IHandleClick {
  e: React.MouseEvent<HTMLSpanElement>;
  section: string;
}

interface INavLi {
  activeSection: string;
  currentSection: string;
}

const NavWrapper = styled.div<{ isExtraLargeView: boolean; theme: ITheme }>`
  padding: 1.5em 2em 0.1em 2em !important;
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

const StyledSpan = styled.span<{ $isActiveSection?: boolean }>`
  font-size: 0.8em;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isActiveSection ? "1px dotted" : "none")};
`;

const NavLi = ({ activeSection, currentSection }: INavLi) => (
  <li>
    <StyledSpan
      $isActiveSection={activeSection === currentSection}
      onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
        handleClick({ e, section: currentSection })
      }
      children={currentSection.toUpperCase()}
    />
  </li>
);

function handleClick({ e, section }: IHandleClick) {
  e.preventDefault();
  window.location.replace(`/#${section}`);
}

export function Nav() {
  const { isExtraLargeView } = useContext(MediaWidthContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [activeSection] = useContext(ActiveSectionContext);

  return (
    <NavWrapper isExtraLargeView={isExtraLargeView} theme={theme}>
      <div></div>
      <NavUl>
        <NavLi activeSection={activeSection} currentSection={content.ABOUT} />
        <NavLi
          activeSection={activeSection}
          currentSection={content.EXPERIENCE}
        />
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTheme(({ index }: ITheme) => {
              const newIndex =
                index < rgbThemeColors.length - 1 ? index + 1 : 0;
              localStorage.setItem("THEME_INDEX", `${newIndex}`);
              return {
                ...rgbThemeColors,
                index: newIndex,
              };
            });
          }}
        >
          🔴
        </li>
      </NavUl>
    </NavWrapper>
  );
}
