import { createContext, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { About, Hero, Nav, Footer, Experience } from "./components";
import { ITheme } from "./interfaces";
import { getRgbColor } from "./utils";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: rgb(${(props) => getRgbColor(props.theme, "text")});
    background-color: rgb(${(props) => getRgbColor(props.theme, "bg")});
    letter-spacing: -0.03em;
    font-family: sans-serif;
  }
`;

const RootWrapper = styled.div`
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
  const [activeSection, setActiveSection] = useState("About");
  const [mediaWidth, setMediaWidth] = useState({
    isExtraLargeView: true,
    isLargeView: true,
  });

  const [theme, setTheme] = useState<ITheme>({
    index: parseInt(localStorage.getItem("THEME_INDEX") || "0", 10),
  });

  useEffect(() => {
    function handleResize() {
      setMediaWidth({
        isExtraLargeView: window.innerWidth > 1250,
        isLargeView: window.innerWidth > 870,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MediaWidthContext.Provider value={mediaWidth}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <ActiveSectionContext.Provider
          value={[activeSection, setActiveSection]}
        >
          <GlobalStyle theme={theme} />
          <RootWrapper>
            <Nav />
            <ContentWrapper>
              <Hero />
              <About />
              <Experience />
              <Footer />
            </ContentWrapper>
          </RootWrapper>
        </ActiveSectionContext.Provider>
      </ThemeContext.Provider>
    </MediaWidthContext.Provider>
  );
}
