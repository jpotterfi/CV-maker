import DeleteIcon from "../../Images/delete-icon.svg";

export default function ModSkills(props) {
  return (
    <div className="column modskills">
      <div className="row between">
        <label className="weight--slight">Skill</label>
        <img
          src={DeleteIcon}
          type="button"
          id={props.moduleID}
          className="delete-icon"
          onClick={props.deleteSkill}
        />
      </div>
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
  );
}
