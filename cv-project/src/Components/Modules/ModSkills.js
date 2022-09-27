export default function ModSkills(props) {
  return (
    <form>
      <div className="column">
        <label className="weight--slight">Skill</label>
        <input
          type="text"
          placeholder="Skill Name"
          name="skillName"
          className="skill"
          value={props.skillName}
          onChange={props.changeSkill}
          id={props.moduleID}
        />
      </div>
    </form>
  );
}
