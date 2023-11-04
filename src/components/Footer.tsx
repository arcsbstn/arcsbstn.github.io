import { useContext } from "react";
import styled from "styled-components";

import { MediaWidthContext, ThemeContext } from "../ResumePortfolio";

import { OutgoingLink } from "./OutgoingLink";
import { ITheme } from "../interfaces";
import { getRgbColor } from "../utils";

const FooterWrapper = styled.div<{ isLargeView: boolean }>`
  padding: 2.5em 1em !important;
  text-align: center;
  font-size: ${(props) => (props.isLargeView ? "0.9em" : "0.7em")};
`;

const Link = styled.a<{ theme: ITheme }>`
  text-decoration: none;
  border-bottom: 1px dotted
    rgba(${(props) => getRgbColor(props, "accent")}, 0.5);

  &:link,
  &:hover,
  &:active,
  &:visited {
    color: rgb(${(props) => getRgbColor(props, "accent")});
  }
`;

export function Footer() {
  const { isLargeView } = useContext(MediaWidthContext);
  const [theme] = useContext(ThemeContext);

  return (
    <FooterWrapper isLargeView={isLargeView} theme={theme}>
      Adrianne Sebastian v4.0.0
      <br />
      Built using{" "}
      <OutgoingLink href="https://create-react-app.dev/" theme={theme}>
        create-react-app
      </OutgoingLink>
      ,{" "}
      <OutgoingLink href="https://styled-components.com/" theme={theme}>
        styled-components
      </OutgoingLink>
      , and{" "}
      <OutgoingLink href="https://www.typescriptlang.org/" theme={theme}>
        TypeScript
      </OutgoingLink>{" "}
      by yours truly. Deployed with{" "}
      <OutgoingLink href="https://pages.github.com/" theme={theme}>
        GitHub Pages
      </OutgoingLink>
      .
    </FooterWrapper>
  );
}
