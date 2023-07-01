export function Experience() {
  const experienceList = ["exp 1", "exp 2", "exp 3"];
  return (
    <div>
      <h3>Experience</h3>
      {experienceList.map((experience) => (
        <div>{experience}</div>
      ))}
    </div>
  );
}
