import styled from "styled-components";

import { CodePen, GitHub, LinkedIn } from "../svg";

const ProfilesWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export function Profiles() {
  return (
    <ProfilesWrapper>
      <li>
        <a href="https://github.com/arcsbstn" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/arcsbstn" target="_blank" rel="noreferrer">
          <CodePen />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/arcsbstn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </li>
    </ProfilesWrapper>
  );
}
