import ModEducation from "./Modules/ModEducation";

export default function Education(props) {
  const educationModArr = props.educationModules;
  console.log("educationModArr", educationModArr);

  const educationModComponents = educationModArr.map(function (mod, index) {
    return (
      <ModEducation
        educationName={educationModArr[index].educationName}
        degreeName={educationModArr[index].degreeName}
        educationStarting={educationModArr[index].educationStarting}
        educationEnding={educationModArr[index].educationEnding}
        moduleID={index}
        changeEducation={props.changeEducation}
      />
    );
  });

  function toggleActive() {
    return props.activeComponentToggle(
      "education",
      props.activeComponentData.education
    );
  }
  return (
    <section id="education">
      <h3
        id="educationComponent"
        name="education"
        value={props.activeComponentData.education}
        onClick={function () {
          toggleActive();
        }}
      >
        <div className="headerText">Education</div>
      </h3>

      {props.activeComponentData.education && (
        <div>
          {educationModComponents}
          <button id="button__addExperience" onClick={props.addEducation}>
            Add Additional Education
          </button>
        </div>
      )}
    </section>
    // {educationModComponents}
    // <button id="button__addExperience" onClick={props.addSkill}>
    //   Add Additional Skill
    // </button>

    // <ModEducation
    //   educationName={props.educationName}
    //   degreeName={props.degreeName}
    //   educationStarting={props.educationStarting}
    //   educationEnding={props.educationEnding}
    // />
  );
}
