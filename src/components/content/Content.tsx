import styled from "styled-components";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const ContentWrapper = styled.div`
  max-width: 550px;
  overflow: auto;

  @media (max-width: 780px) {
    position: relative;
    flex-direction: column;
    max-width: 780px;
  }
`;

export default function Content() {
  return (
    <ContentWrapper>
      <Experience />
      <Projects />
    </ContentWrapper>
  );
}
