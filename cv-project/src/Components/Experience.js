import ModExperience from "./Modules/ModExperience";

export default function Experience(props) {
  const expModArr = props.experienceModules;
  console.log("experience modules", expModArr);

  let expModComponents = expModArr.map(function (mod, index) {
    return (
      <ModExperience
        experienceName={props.experienceModules[index].experienceName}
        experienceStarting={props.experienceModules[index].experienceStarting}
        experienceEnding={props.experienceModules[index].experienceEnding}
        experienceRole={props.experienceModules[index].experienceRole}
        experienceDescription={
          props.experienceModules[index].experienceDescription
        }
        moduleID={index}
        changeExperience={props.changeExperience}
      />
    );
  });

  console.log("expModComponents", expModComponents);

  function toggleActive() {
    return props.activeComponentToggle(
      "experience",
      props.activeComponentData.experience
    );
  }

  return (
    <section id="experience">
      <h3
        id="experienceComponent"
        name="experience"
        value={props.activeComponentData.experience}
        onClick={function () {
          toggleActive();
        }}
      >
        Experience
      </h3>
      {props.activeComponentData.experience && expModComponents}
      <button id="button__addExperience" onClick={props.addExperience}>
        Add Additional Experience
      </button>
    </section>
  );
}