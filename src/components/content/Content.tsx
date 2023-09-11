import styled from "styled-components";

import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";

const ContentWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8em;

  padding: 8em 0;
  max-width: 750px;

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
      <Footer />
    </ContentWrapper>
  );
}
