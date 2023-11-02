import { useContext } from "react";
import styled from "styled-components";

import { MediaWidthContext } from "../ResumePortfolio";

const FooterWrapper = styled.div<{ isLargeView: boolean }>`
  padding: 2.5em 1em !important;
  text-align: center;
  font-size: ${(props) => (props.isLargeView ? "0.9em" : "0.7em")};
`;

export function Footer() {
  const { isLargeView } = useContext(MediaWidthContext);
  return (
    <FooterWrapper isLargeView={isLargeView}>
      Adrianne Sebastian v4.0.0
      <br />
      Updated 20231103 Site built using{" "}
      <a href="https://create-react-app.dev/" target="_blank" rel="noreferrer">
        create-react-app
      </a>
      ,{" "}
      <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
        styled-components
      </a>
      , and{" "}
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        TypeScript
      </a>{" "}
      by yours truly. Deployed with{" "}
      <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
        GitHub Pages
      </a>
      .
    </FooterWrapper>
  );
}
