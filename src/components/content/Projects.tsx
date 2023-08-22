import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Card, Deck } from "../common";
import { content, projectList } from "../../constants";
import { ActiveSectionContext, MediaWidthContext } from "../../ResumePortfolio";
export default function Projects() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const isWebView = useContext(MediaWidthContext);
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (activeSection !== content.PROJECTS && projectsInView)
      setActiveSection(content.PROJECTS);
  }, [projectsInView]);

  return (
    <Deck id={content.PROJECTS} ref={projectsRef}>
      {!isWebView && <h3>{content.PROJECTS.toUpperCase()}</h3>}
      {projectList.map(
        ({ title, description, techStack, demoLink, repoLink, imgLink }) => (
          <>
            <Card
              title={title}
              description={description}
              techStack={techStack}
              leftComponent={
                imgLink ? (
                  <img style={{ width: "175px" }} src={imgLink} />
                ) : null
              }
            />
          </>
        )
      )}
    </Deck>
  );
}
