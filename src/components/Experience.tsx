import { useContext } from "react";

import { Chip } from "./common";
import { experienceList } from "../constants";
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
import { MediaWidthContext, ThemeContext } from "../ResumePortfolio";

export function Experience() {
  const { isLargeView } = useContext(MediaWidthContext);
  const [theme] = useContext(ThemeContext);

  return (
    <ExperienceWrapper>
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
