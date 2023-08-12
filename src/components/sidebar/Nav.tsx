import { useContext } from "react";
import styled from "styled-components";

import { content } from "../../constants";
import { ActiveSectionContext } from "../../ResumePortfolio";

interface IHandleClick {
  e: React.MouseEvent<HTMLSpanElement>;
  section: string;
}

interface INavLi {
  activeSection: string;
  currentSection: string;
}

function handleClick({ e, section }: IHandleClick) {
  e.preventDefault();
  window.location.replace(`/#${section}`);
}

const AnimatedDash = styled.div<{ $isActiveSection?: boolean }>`
  position: relative;
  top: -4px;
  margin-right: 24px;
  height: 1.5px;
  width: ${(props) => (props.$isActiveSection ? "60px" : "20px")};
  background-color: ${(props) => (props.$isActiveSection ? "blue" : "black")};
  display: inline-block;
  -webkit-transition: -webkit-transform 0.3s, width 0.5s;
  -moz-transition: -webkit-transform 0.3s, width 0.5s;
  transition: transform 0.3s, width 0.5s;
`;

const StyledSpan = styled.span<{ $isActiveSection?: boolean }>`
  font-size: 0.9em;

  cursor: pointer;
  color: ${(props) => {
    return props.$isActiveSection ? "blue" : "black";
  }};
`;

const NavUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const NavLi = ({ activeSection, currentSection }: INavLi) => (
  <li>
    <AnimatedDash $isActiveSection={activeSection === currentSection} />
    <StyledSpan
      $isActiveSection={activeSection === currentSection}
      onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
        handleClick({ e, section: currentSection })
      }
      children={currentSection.toUpperCase()}
    />
  </li>
);

export default function Nav() {
  const [activeSection] = useContext(ActiveSectionContext);

  return (
    <NavUl>
      <NavLi activeSection={activeSection} currentSection={content.EXPERIENCE} />
      <NavLi activeSection={activeSection} currentSection={content.PROJECTS} />
    </NavUl>
  );
}
