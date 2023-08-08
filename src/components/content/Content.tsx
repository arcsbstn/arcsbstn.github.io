import styled from "styled-components";

import Experience from "./Experience";
import Projects from "./Projects";

const ContentWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 5em;

  padding: 8em 0;
  max-width: 550px;

  @media (max-width: 980px) {
    padding 0 0 8em 0;
    max-width: 980px;
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
