import React, { useState } from "react";
import styled from "styled-components";
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

export const ActiveSectionContext = React.createContext<any>(null);

export default function ResumePortfolio() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <ActiveSectionContext.Provider value={[activeSection, setActiveSection]}>
      <MainContainer>
        <Sidebar />
        <Content />
      </MainContainer>
    </ActiveSectionContext.Provider>
  );
}
