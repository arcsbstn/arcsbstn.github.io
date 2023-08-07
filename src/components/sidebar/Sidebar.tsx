import styled from "styled-components";

import Hero from "./Hero";
import Nav from "./Nav";
import Profiles from "./Profiles";

const SidebarWrapper = styled.div`
  align-self: flex-start;
  flex-direction: column;
  overflow-y: auto;
  padding: 5em 0;
  top: 0;

  position: -webkit-sticky;
  position: sticky;
  max-width: 350px;
  height: 100vh;

  @media (max-width: 780px) {
    position: relative;
    max-width: 780px;
    height: auto;
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
