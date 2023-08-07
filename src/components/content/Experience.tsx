import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EContent } from "../../enums";
import { ActiveSectionContext } from "../../ResumePortfolio";
import { experienceList } from "./experienceList";

export default function Experience() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (activeSection !== EContent.EXPERIENCE && experienceInView)
      setActiveSection(EContent.EXPERIENCE);
  }, [experienceInView]);

  return (
    <div id={EContent.EXPERIENCE} ref={experienceRef}>
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
    </div>
  );
}
