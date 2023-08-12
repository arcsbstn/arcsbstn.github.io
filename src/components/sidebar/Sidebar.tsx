import { useContext } from "react";
import styled from "styled-components";

import Hero from "./Hero";
import Nav from "./Nav";
import Profiles from "./Profiles";
import { MediaWidthContext } from "../../ResumePortfolio";

const SidebarWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3em;
  overflow-y: auto;
  top: 0;

  padding: 8em 0;
  position: -webkit-sticky;
  position: sticky;
  max-width: 350px;
  height: 100vh;

  @media (max-width: 980px) {
    padding: 8em 0 0 0;
    position: relative;
    max-width: 980px;
    height: auto;
  }
`;

export default function Sidebar() {
  const isWebView = useContext(MediaWidthContext);

  return (
    <SidebarWrapper>
      <Hero />
      {isWebView && <Nav />}
      <Profiles />
    </SidebarWrapper>
  );
}
