import ModExperience from "./Modules/ModExperience";

export default function Experience(props) {
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
      {props.activeComponentData.experience && (
        <ModExperience data={props.data} handleChange={props.handleChange} />
      )}
      <button id="addExperience"></button>
    </section>
  );
}
