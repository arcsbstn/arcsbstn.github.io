import React, { useContext, useEffect } from "react";
import { ActiveSectionContext } from "../../ResumePortfolio";
import { useInView } from "react-intersection-observer";

const experienceList = [
  {
    role: "Software Developer",
    organization: "Full Potential Solutions, Inc.",
    startEndDates: "2021 Oct - Present",
    description: `Participates in Scrum ceremonies
    Demonstrates implemented features to the team and stakeholders
    Manages and documents tasks using Jira
    Implements product interfaces based on agreed-upon acceptance criteria and Figma mockups`,
    techStack: [
      "JavaScript",
      "Twilio",
      "ReactJS",
      "Redux",
      "Node.js",
      "Postman",
    ],
  },
  {
    role: "Junior Software Engineer",
    organization: "Reekoh, Inc.",
    startEndDates: "2019 May - 2021 Apr",
    description: "",
    techStack: ["JavaScript", "Node.js", "Postman", "MongoDB"],
  },
  {
    role: "Associate Software Engineer",
    organization: "Accenture, Inc.",
    startEndDates: "2018 Feb - 2019 Apr",
    description: "",
    techStack: ["JavaScript, Node.js, AngularJS"],
  },
];

export default function Experience() {
  const [activeSection, setActiveSection] = useContext(ActiveSectionContext);
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    console.log({ experienceInView });
    if (activeSection !== "experience" && experienceInView)
      setActiveSection("experience");
  }, [experienceInView]);

  return (
    <div
      id="experience"
      ref={experienceRef}
      style={{ backgroundColor: "pink" }}
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
    </div>
  );
}
