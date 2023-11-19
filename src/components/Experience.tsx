import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Chip } from "./common";
import { content, experienceList } from "../constants";
import {
  ExperienceWrapper,
  Table,
  TableRow,
  TableCell,
  Row,
  JobTitle,
  Organization,
  Duration,
  Description,
  ChipsWrapper,
} from "./Experience.styles";
import { OutgoingLink } from "./OutgoingLink";
import {
  ActiveSectionContext,
  MediaWidthContext,
  ThemeContext,
} from "../ResumePortfolio";

export function Experience() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { isLargeView } = useContext(MediaWidthContext);
  const [theme] = useContext(ThemeContext);

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (activeSection !== content.EXPERIENCE && experienceInView)
      setActiveSection(content.EXPERIENCE);
  }, [experienceInView]);

  return (
    <ExperienceWrapper ref={experienceRef} id={content.EXPERIENCE}>
      {isLargeView ? (
        <Table>
          {experienceList.map(
            (
              { organization, role, startEndDates, description, techStack },
              index
            ) => (
              <TableRow key={index}>
                <TableCell>
                  <Duration>{startEndDates}</Duration>
                </TableCell>
                <TableCell>
                  <JobTitle>{role}</JobTitle>
                  <Organization>{organization}</Organization>
                </TableCell>
                <TableCell>
                  <Description>{description}</Description>
                  <ChipsWrapper>
                    {techStack.map((tech: string) => (
                      <Chip>{tech}</Chip>
                    ))}
                  </ChipsWrapper>
                </TableCell>
              </TableRow>
            )
          )}
        </Table>
      ) : (
        <>
          {experienceList.map(
            ({ organization, role, startEndDates, description, techStack }) => (
              <Row>
                <JobTitle>{role}</JobTitle>
                <Organization>{organization}</Organization>
                <Duration>{startEndDates}</Duration>
                <Description>{description}</Description>
                <ChipsWrapper>
                  {techStack.map((tech: string) => (
                    <Chip>{tech}</Chip>
                  ))}
                </ChipsWrapper>
              </Row>
            )
          )}
        </>
      )}
      <h5>
        <OutgoingLink
          href={require("../static/arcsbstn-resume-2023.pdf")}
          theme={theme}
        >
          View detailed resume
        </OutgoingLink>
      </h5>
    </ExperienceWrapper>
  );
}
