import styled from "styled-components";

import Experience from "./Experience";
import Projects from "./Projects";

const ContentWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8em;

  padding: 5em 0;
  max-width: 550px;

  @media (max-width: 780px) {
    padding 0 0 5em 0;
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
