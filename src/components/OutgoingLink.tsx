import styled from "styled-components";

import { ITheme } from "../interfaces";
import { getRgbColor } from "../utils";

interface IOutgoingLink {
  children: React.ReactNode;
  href: string;
  theme: ITheme;
}

const Link = styled.a<{ theme: ITheme }>`
  text-decoration: none;
  border-bottom: 1px dotted
    rgba(${(props) => getRgbColor(props.theme, "accent")}, 0.5);

  &:link,
  &:hover,
  &:active,
  &:visited {
    color: rgb(${(props) => getRgbColor(props.theme, "accent")});
  }
`;

export function OutgoingLink(props: IOutgoingLink) {
  const { children, href, theme } = props;
  return (
    <Link href={href} target="_blank" rel="noreferrer" theme={theme}>
      {children}
    </Link>
  );
}
