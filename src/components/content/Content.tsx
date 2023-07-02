import styled from "styled-components";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const ContentWrapper = styled.div`
  overflow: auto;
`;

export default function Content() {
  return (
    <ContentWrapper>
      <About />
      <Experience />
      <Projects />
    </ContentWrapper>
  );
}
