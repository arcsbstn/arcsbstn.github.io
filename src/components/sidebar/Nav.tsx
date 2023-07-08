interface IHandleClick {
  e: any;
  section: string;
}

function handleClick({ e, section }: IHandleClick) {
  e.preventDefault();
  window.location.replace(`/#${section}`);
}

export default function Nav() {
  return (
    <ul>
      <li onClick={(e) => handleClick({ e, section: "about" })}>About</li>
      <li onClick={(e) => handleClick({ e, section: "experience" })}>
        Experience
      </li>
      <li onClick={(e) => handleClick({ e, section: "projects" })}>Projects</li>
    </ul>
  );
}
