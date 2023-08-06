import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar, Content } from "./components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  gap: 1em;

  @media (max-width: 780px) {
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
