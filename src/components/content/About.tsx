import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EContent } from "../../enums";
import { ActiveSectionContext } from "../../ResumePortfolio";

export default function About() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (activeSection !== EContent.ABOUT && aboutInView)
      setActiveSection(EContent.ABOUT);
  }, [aboutInView]);

  return (
    <div id={EContent.ABOUT} ref={aboutRef}>
      <p>
        I build things that live on the web, working with teams and helping
        organizations create products that are beautiful, useful, and useable.
      </p>
      <p>
        Wanted to mix my enthusiasm for visual communication with my electronics
        engineering background, and somehow strong-armed my way into web
        development!
      </p>
      <p>
        Offline, I enjoy figure skating, digital painting, and messing around
        with makeup.
      </p>
    </div>
  );
}
