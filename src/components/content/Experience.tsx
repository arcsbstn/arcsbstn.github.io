import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { content, experienceList } from "../../constants";
import { ActiveSectionContext } from "../../ResumePortfolio";

export default function Experience() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (activeSection !== content.EXPERIENCE && experienceInView)
      setActiveSection(content.EXPERIENCE);
  }, [experienceInView]);

  return (
    <div
      id={content.EXPERIENCE}
      ref={experienceRef}
      style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}
    >
      {experienceList.map(
        ({ organization, role, startEndDates, description, techStack }) => (
          <div>
            <h4>{role}</h4>
            <h5>{organization}</h5>
            <h6>{startEndDates}</h6>
            <p>{description}</p>
            <p>Technologies: {techStack.join(", ")}</p>
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
    </div>
  );
}
