export default function PreviewSkills(props) {
  const skills = props.skillsModules;

  const skillsArr = skills.map(function (skill) {
    return <div className="preview__skills__skill">{skill}</div>;
  });
  return (
    <section id="preview__skills" className="column preview__gap_larger">
      <h3 className="preview__header" style={props.headerColor}>
        Skills
      </h3>
      {skillsArr}
    </section>
  );
}
