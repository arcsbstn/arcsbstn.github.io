import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Card, Deck, Link } from "../common";
import { content, experienceList } from "../../constants";
import { ActiveSectionContext, MediaWidthContext } from "../../ResumePortfolio";
import { OutgoingLink } from "../../svg";

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
          <Card
            title={role}
            subtitle={organization}
            description={description}
            techStack={techStack}
            leftComponent={startEndDates}
          />
        )
      )}
      <h5>
        <Link
          href={require("../../static/arcsbstn-cv-2023.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          View detailed curriculum vitae <OutgoingLink />
        </Link>
      </h5>
    </Deck>
  );
}
