import { useContext } from "react";

import { content } from "../../constants";
import { ActiveSectionContext } from "../../ResumePortfolio";

interface IHandleClick {
  e: any;
  section: string;
}

function handleClick({ e, section }: IHandleClick) {
  e.preventDefault();
  window.location.replace(`/#${section}`);
}

export default function Nav() {
  const [activeSection] = useContext(ActiveSectionContext);
  console.log({ activeSection });

  return (
    <ul>
      <li onClick={(e) => handleClick({ e, section: "experience" })}>
        Experience {activeSection === content.EXPERIENCE ? "ACTIVE" : ""}
      </li>
      <li onClick={(e) => handleClick({ e, section: "projects" })}>
        Projects {activeSection === content.PROJECTS ? "ACTIVE" : ""}
      </li>
    </ul>
  );
}
