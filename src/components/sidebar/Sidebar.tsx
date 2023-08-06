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
  max-width: 390px;

  @media (max-width: 780px) {
    position: relative;
    flex-direction: column;
    max-width: 780px;
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
