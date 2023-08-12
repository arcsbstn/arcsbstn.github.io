import { createContext, useEffect, useState } from "react";
import styled from "styled-components";

import { content } from "./constants";
import { Sidebar, Content } from "./components";

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  gap: 3.3em;
  padding: 0 2em;

  flex-direction: row;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const MediaWidthContext = createContext<any>(null);
export const ActiveSectionContext = createContext<any>(null);

export default function ResumePortfolio() {
  const [activeSection, setActiveSection] = useState(content.EXPERIENCE);
  const [isWebView, setIsWebView] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsWebView(window.innerWidth > 980);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MediaWidthContext.Provider value={isWebView}>
      <ActiveSectionContext.Provider value={[activeSection, setActiveSection]}>
        <MainContainer>
          <Sidebar />
          <Content />
        </MainContainer>
      </ActiveSectionContext.Provider>
    </MediaWidthContext.Provider>
  );
}
