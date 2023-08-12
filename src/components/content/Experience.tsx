import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Chip, Deck } from "../common";
import { content, experienceList } from "../../constants";
import { ActiveSectionContext, MediaWidthContext } from "../../ResumePortfolio";

export default function Experience() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const isWebView = useContext(MediaWidthContext);
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (activeSection !== content.EXPERIENCE && experienceInView)
      setActiveSection(content.EXPERIENCE);
  }, [experienceInView]);

  return (
    <Deck id={content.EXPERIENCE} ref={experienceRef}>
      {!isWebView && <h3>{content.EXPERIENCE.toUpperCase()}</h3>}
      {experienceList.map(
        ({ organization, role, startEndDates, description, techStack }) => (
          <div>
            <h4>{role}</h4>
            <h5>{organization}</h5>
            <h6>{startEndDates}</h6>
            <p>{description}</p>
            <p>
              {techStack.map((e) => (
                <Chip>{e}</Chip>
              ))}
            </p>
          </div>
        )
      )}
      <h5>
        <a
          href={require("../../static/arcsbstn-cv-2023.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          View detailed curriculum vitae
        </a>
      </h5>
    </Deck>
  );
}
