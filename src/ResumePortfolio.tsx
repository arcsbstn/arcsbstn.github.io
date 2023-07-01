import { Hero, Profiles, Nav, About, Experience, Projects } from "./components";

export default function ResumePortfolio() {
  return (
    <div>
      <div>
        <Hero />
        <Nav />
        <Profiles />
      </div>
      <div>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
