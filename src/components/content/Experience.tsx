const experienceList = [
  {
    role: "Software Developer",
    organization: "Full Potential Solutions, Inc.",
    startEndDates: "2021 Oct - Present",
    description: "",
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
  return (
    <div id="experience">
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
