import ModSkills from "./Modules/ModSkills";

export default function Skills(props) {
  const skillsModArr = props.skillsModules;
  console.log("skillsModArr", skillsModArr);
  console.log(skillsModArr[0]);

  const skillsModComponents = skillsModArr.map(function (mod, index) {
    return (
      <ModSkills
        skillsName={skillsModArr[index]}
        moduleID={index}
        changeSkill={props.changeSkill}
      />
    );
  });
  console.log("skillsModComponents", skillsModComponents);

  function toggleActive() {
    return props.activeComponentToggle(
      "skills",
      props.activeComponentData.experience
    );
  }
  return (
    <section id="skills">
      <h3
        id="skillsComponent"
        name="skills"
        value={props.activeComponentData.skills}
        onClick={function () {
          toggleActive();
        }}
      >
        Skills
      </h3>

      {props.activeComponentData.skills && (
        <div>
          {skillsModComponents}
          <button id="button__addExperience" onClick={props.addSkill}>
            Add Additional Skill
          </button>
        </div>
      )}
    </section>
  );

  // const skillsModArr = props.skillsModules;

  // let skillsModComponents = skillsModArr(function (mod, index){
  //     return (
  //         <ModExperience
  //     experienceName={props.experienceModules[index].experienceName}
  //     experienceStarting={props.experienceModules[index].experienceStarting}
  //     experienceEnding={props.experienceModules[index].experienceEnding}
  //     experienceRole={props.experienceModules[index].experienceRole}
  //     experienceDescription={
  //       props.experienceModules[index].experienceDescription
  //     }
  //     moduleID={index}
  //     changeExperience={props.changeExperience}
  //   />
  //     )
  // })
}