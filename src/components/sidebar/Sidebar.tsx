import styled from "styled-components";

import Hero from "./Hero";
import Nav from "./Nav";
import Profiles from "./Profiles";

const SidebarWrapper = styled.div`
  align-self: flex-start;
  flex-direction: column;
  overflow-y: auto;
  top: 0;
  
  padding: 5em 0;
  position: -webkit-sticky;
  position: sticky;
  max-width: 350px;
  height: 100vh;

  @media (max-width: 780px) {
    padding: 5em 0 0 0;
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
