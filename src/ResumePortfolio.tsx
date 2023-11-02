import { createContext, useEffect, useState } from "react";
import styled from "styled-components";

import { About, Hero, Nav } from "./components";

const RootWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 0 2em;
  max-width: 1000px;
  margin: 0 auto;
`;

export const MediaWidthContext = createContext<any>(null);
export const ActiveSectionContext = createContext<any>(null);

export default function ResumePortfolio() {
  const [mediaWidth, setMediaWidth] = useState({
    isExtraLargeView: true,
    isLargeView: true,
  });

  useEffect(() => {
    function handleResize() {
      setMediaWidth({
        isExtraLargeView: window.innerWidth > 1250,
        isLargeView: window.innerWidth > 790,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MediaWidthContext.Provider value={mediaWidth}>
      <RootWrapper>
        <Nav />
        <ContentWrapper>
          <Hero />
          <About />
        </ContentWrapper>
      </RootWrapper>
    </MediaWidthContext.Provider>
  );
}
