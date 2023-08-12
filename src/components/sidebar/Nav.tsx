import { useContext } from "react";
import styled from "styled-components";

import { content } from "../../constants";
import { ActiveSectionContext } from "../../ResumePortfolio";

interface IHandleClick {
  e: React.MouseEvent<HTMLUListElement>;
  section: string;
}

function handleClick({ e, section }: IHandleClick) {
  e.preventDefault();
  window.location.replace(`/#${section}`);
}

const StyledLi = styled.li<{ $isActiveSection?: boolean }>`
  cursor: pointer;
  color: ${(props) => {
    return props.$isActiveSection ? "blue" : "black";
  }};
`;

export default function Nav() {
  const [activeSection] = useContext(ActiveSectionContext);

  return (
    <ul>
      <StyledLi
        $isActiveSection={activeSection === content.EXPERIENCE}
        onClick={(e: any) => handleClick({ e, section: content.EXPERIENCE })}
      >
        Experience
      </StyledLi>
      <StyledLi
        $isActiveSection={activeSection === content.PROJECTS}
        onClick={(e: any) => handleClick({ e, section: content.PROJECTS })}
      >
        Projects
      </StyledLi>
    </ul>
  );
}
