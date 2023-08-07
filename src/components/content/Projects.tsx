import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { content, projectList } from "../../constants";
import { ActiveSectionContext } from "../../ResumePortfolio";

export default function Projects() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (activeSection !== content.PROJECTS && projectsInView)
      setActiveSection(content.PROJECTS);
  }, [projectsInView]);

  return (
    <div id={content.PROJECTS} ref={projectsRef}>
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
