import React, { useContext, useEffect } from "react";
import { ActiveSectionContext } from "../../ResumePortfolio";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    console.log({ aboutInView });
    if (activeSection !== "about" && aboutInView) setActiveSection("about");
  }, [aboutInView]);

  return (
    <div id="about" style={{ width: "400px" }} ref={aboutRef}>
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
