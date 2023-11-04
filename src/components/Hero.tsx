import { useContext } from "react";
import styled from "styled-components";

import { Profiles } from "./Profiles";
import { MediaWidthContext, ThemeContext } from "../ResumePortfolio";
import { ITheme } from "../interfaces";
import { getRgbColor } from "../utils";

const HeroWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroContentWrapper = styled.div`
  margin-bottom: 5em;
`;

const Title = styled.h1<{ isLargeView: boolean; theme: ITheme }>`
  color: rgb(${(props) => getRgbColor(props.theme, "accent")});
  text-decoration: none;
  font-size: ${(props) => (props.isLargeView ? "10em" : "5em")};
  letter-spacing: -0.05em;
  line-height: 0.8em;
`;

const Subtitle = styled.h2<{ isLargeView: boolean }>`
  text-decoration: none;
  font-size: ${(props) => (props.isLargeView ? "5.5em" : "3em")};
  letter-spacing: -0.05em;
`;

export function Hero() {
  const { isLargeView } = useContext(MediaWidthContext);
  const [theme] = useContext(ThemeContext);
  return (
    <HeroWrapper>
      <div></div>
      <HeroContentWrapper>
        <Title isLargeView={isLargeView} theme={theme}>
          Adrianne Sebastian
        </Title>
        <Subtitle isLargeView={isLargeView}>Software Developer</Subtitle>
        <Profiles />
      </HeroContentWrapper>
    </HeroWrapper>
  );
}
