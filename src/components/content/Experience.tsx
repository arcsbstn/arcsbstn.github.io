import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EContent } from "../../enums";
import { ActiveSectionContext } from "../../ResumePortfolio";

const experienceList = [
  {
    role: "Software Developer",
    organization: "Full Potential Solutions, Inc.",
    startEndDates: "2021 Oct - Present",
    description: `Contribute to the development of Xcelerate, a contact center solution powered by the Twilio Flex platform. Key responsibilities involved creating UIs for Bulk Data Upload from CSV Files, Technical Support Documentation, Admin Configuration, and Multiple Outbound Numbers Configuration.`,
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
    description: `Developed modular plugins to seamlessly integrate RESTful services from diverse enterprise solutions into the Reekoh platform. Collaborated closely with the service engineering team and the organization's CTO throughout the entire software development lifecycle, encompassing the design, prototyping, development, testing, delivery, and maintenance of each plugin.`,
    techStack: ["JavaScript", "Node.js", "Postman", "MongoDB"],
  },
  {
    role: "Associate Software Engineer",
    organization: "Accenture, Inc.",
    startEndDates: "2018 Feb - 2019 Apr",
    description: "Temporarily assigned to the Virtual Chatbot team, where I resolved bugs and integrated the Elasticsearch and Kibana visualization engines with the chatbot.",
    techStack: ["JavaScript, Node.js, AngularJS"],
  },
];

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
    <div
      id={EContent.EXPERIENCE}
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
