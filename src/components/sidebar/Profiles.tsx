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
        <GitHub />
      </li>
      <li>
        <CodePen />
      </li>
      <li>
        <LinkedIn />
      </li>
    </ProfilesWrapper>
  );
}
