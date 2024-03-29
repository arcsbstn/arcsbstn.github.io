import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { content } from '../constants';
import { ActiveSectionContext, MediaWidthContext } from "../ResumePortfolio";

const AboutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContentWrapper = styled.div<{ isLargeView: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isLargeView ? "row" : "column")};
  gap: ${(props) => (props.isLargeView ? "1em" : "0")};
  font-size: ${(props) => (props.isLargeView ? "1.8em" : "1.2em")};
`;

const AboutContent = styled.div`
  p {
    margin-bottom: 0.5em;
    line-height: 0.9em;
  }

  #greeting {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.1em;
  }
`;

export function About() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { isLargeView } = useContext(MediaWidthContext);

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (activeSection !== content.ABOUT && aboutInView) setActiveSection(content.ABOUT);
  }, [aboutInView]);

  return (
    <AboutWrapper ref={aboutRef} id={content.ABOUT}>
      <AboutContentWrapper isLargeView={isLargeView}>
        <AboutContent>
          <p id="greeting">Hello world!</p>
          <p>I'm a learner, coder, figure-things-out-er thingamababber.</p>
        </AboutContent>
        <AboutContent>
          <p>
            I care about crafting delightful and performant web-based products
            (while keeping the codebase cute). ✌️
          </p>
          <p>
            When I'm not online, I enjoy figure skating, perusing stationery
            accessories, and scribbling on various surfaces.
          </p>
        </AboutContent>
      </AboutContentWrapper>
    </AboutWrapper>
  );
}
