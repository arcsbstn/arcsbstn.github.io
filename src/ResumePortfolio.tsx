import { createContext, useEffect, useState } from "react";
import styled from "styled-components";

import { About, Hero, Nav, Footer } from "./components";
import { ITheme } from "./interfaces";
import { getRgbColor } from "./utils";

const RootWrapper = styled.div<{ theme: ITheme }>`
  * {
    margin: 0;
    padding: 0;
  }

  color: rgb(${(props) => getRgbColor(props.theme, "text")});
  background-color: rgb(${(props) => getRgbColor(props.theme, "bg")});

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
export const ThemeContext = createContext<any>(null);
export const ActiveSectionContext = createContext<any>(null);

export default function ResumePortfolio() {
  const [mediaWidth, setMediaWidth] = useState({
    isExtraLargeView: true,
    isLargeView: true,
  });

  const [theme, setTheme] = useState<ITheme>({
    index: 0,
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
      <ThemeContext.Provider value={[theme, setTheme]}>
        <RootWrapper theme={theme}>
          <Nav />
          <ContentWrapper>
            <Hero />
            <About />
            <Footer />
          </ContentWrapper>
        </RootWrapper>
      </ThemeContext.Provider>
    </MediaWidthContext.Provider>
  );
}
