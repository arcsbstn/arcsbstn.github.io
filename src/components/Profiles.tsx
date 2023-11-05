import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../ResumePortfolio";
import { CodePen, GitHub, LinkedIn } from "../svg";
import { getRgbColor } from "../utils";

const ProfilesWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export function Profiles() {
  const [theme] = useContext(ThemeContext);
  return (
    <ProfilesWrapper>
      <li>
        <a href="https://github.com/arcsbstn" target="_blank" rel="noreferrer">
          <GitHub color={`rgb(${getRgbColor(theme, "text")})`} />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/arcsbstn" target="_blank" rel="noreferrer">
          <CodePen color={`rgb(${getRgbColor(theme, "text")})`}/>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/arcsbstn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn color={`rgb(${getRgbColor(theme, "text")})`}/>
        </a>
      </li>
    </ProfilesWrapper>
  );
}
