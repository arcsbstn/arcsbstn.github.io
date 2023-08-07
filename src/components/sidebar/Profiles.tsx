import styled from "styled-components";

import { CodePen, GitHub, LinkedIn } from "../../svg";

const ProfilesWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export default function Profiles() {
  return (
    <ProfilesWrapper>
      <li>
        <a href="https://github.com/arcsbstn" target="_blank">
          <GitHub />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/arcsbstn" target="_blank">
          <CodePen />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/arcsbstn/" target="_blank">
          <LinkedIn />
        </a>
      </li>
    </ProfilesWrapper>
  );
}
