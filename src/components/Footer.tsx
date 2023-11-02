import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 2.5em 1em;
  text-align: center;
  font-size: 0.7em;
`;

export function Footer() {
  return (
    <FooterWrapper>
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
