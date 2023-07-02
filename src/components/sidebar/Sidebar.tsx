import styled from "styled-components";

import Hero from "./Hero";
import Nav from "./Nav";
import Profiles from "./Profiles";

const SidebarWrapper = styled.div`
  align-self: flex-start;
  overflow-y: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  max-width: 700px;

  @media (max-width: 1080px) {
    position: relative;
    flex-direction: column;
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Hero />
      <Nav />
      <Profiles />
    </SidebarWrapper>
  );
}
