import styled from "styled-components";
import { Sidebar, Content } from "./components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1300px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default function ResumePortfolio() {
  return (
    <MainContainer>
      <Sidebar />
      <Content />
    </MainContainer>
  );
}
