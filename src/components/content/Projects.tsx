import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EContent } from "../../enums";
import { ActiveSectionContext } from "../../ResumePortfolio";

const projectList = [
  {
    title: "25+5 Clock",
    techStack: ["React"],
    description:
      "Pomodoro timer with an alarm and the option to adjust break and work session lengths.",
    demoLink: "https://mystifying-booth-451e8d.netlify.app/",
    repoLink: "https://github.com/arcsbstn/fcc-25-5-clock",
  },
  {
    title: "Product Landing Page",
    techStack: ["HTML5", "CSS3"],
    description: "Responsive product landing page for a fictitious cafe.",
    demoLink: "https://codepen.io/arcsbstn/full/LYyzOdM",
    repoLink: "https://codepen.io/arcsbstn/pen/LYyzOdM",
  },
  {
    title: "Markdown Previewer",
    techStack: ["React", "Marked", "Bootstrap"],
    description:
      "Responsive webapp for previewing Markdown syntax as rendered HTML.",
    demoLink: "https://epic-ramanujan-65ff54.netlify.app/",
    repoLink: "https://github.com/arcsbstn/fcc-markdown-previewer",
  },
  {
    title: "Drum Machine",
    techStack: ["React", "Bootstrap"],
    description: "Drum machine pads for generating sick beats.",
    demoLink: "https://hungry-kowalevski-20f07c.netlify.app/",
    repoLink: "https://github.com/arcsbstn/fcc-drum-machine",
  },
  {
    title: "CSS Flexboxes Technical Documentation Page",
    techStack: ["HTML5", "CSS3"],
    description: "Personal cheatsheet for CSS Flexboxes.",
    demoLink: "https://codepen.io/arcsbstn/full/ZEKRBjr",
    repoLink: "https://codepen.io/arcsbstn/pen/ZEKRBjr",
  },
  {
    title: "JavaScript Calculator",
    techStack: ["React"],
    description:
      "Basic calculator that uses formula logic (as opposed to immediate execution logic).",
    demoLink: "https://flamboyant-hamilton-0a68fc.netlify.app/",
    repoLink: "https://github.com/arcsbstn/fcc-javascript-calculator",
  },
];

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
    <div
      id={EContent.PROJECTS}
      ref={projectsRef}
      style={{ backgroundColor: "skyblue" }}
    >
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
