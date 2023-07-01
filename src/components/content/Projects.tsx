export function Projects() {
  const projectList = [1, 2, 3, 4, 5];
  return (
    <div>
      <h3>Projects</h3>
      {projectList.map((project) => (
        <div>{project}</div>
      ))}
    </div>
  );
}
