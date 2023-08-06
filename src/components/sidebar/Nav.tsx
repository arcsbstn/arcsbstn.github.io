import { useContext } from "react";
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
      <li onClick={(e) => handleClick({ e, section: "about" })}>
        About {activeSection === "about" ? "ACTIVE" : ""}
      </li>
      <li onClick={(e) => handleClick({ e, section: "experience" })}>
        Experience {activeSection === "experience" ? "ACTIVE" : ""}
      </li>
      <li onClick={(e) => handleClick({ e, section: "projects" })}>
        Projects {activeSection === "projects" ? "ACTIVE" : ""}
      </li>
    </ul>
  );
}
