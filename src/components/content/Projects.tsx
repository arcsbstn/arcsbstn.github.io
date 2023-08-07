import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EContent } from "../../enums";
import { ActiveSectionContext } from "../../ResumePortfolio";
import { projectList } from "./projectsList";

export default function Projects() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    console.log({ projectsInView });
    if (activeSection !== EContent.PROJECTS && projectsInView)
      setActiveSection(EContent.PROJECTS);
  }, [projectsInView]);

  return (
    <div id={EContent.PROJECTS} ref={projectsRef}>
      {projectList.map(
        ({ title, description, techStack, demoLink, repoLink }) => (
          <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <p>
              Tech Stack:
              <ul>
                {techStack.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </p>
          </div>
        )
      )}
    </div>
  );
}
