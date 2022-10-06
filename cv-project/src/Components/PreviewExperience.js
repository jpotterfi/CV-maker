export default function PreviewExperience(props) {
  const experiences = props.experienceModules;
  console.log("experiences", experiences);

  const experiencesArr = experiences.map(function (experience) {
    return (
      <div className="row preview__experience__mod">
        <div className="column preview__experience__dates">
          <div>{experience.experienceStarting}&nbsp;-</div>
          <br></br>
          <div>{experience.experienceEnding}</div>
        </div>
        <div className="column preview__experience__mod__description">
          <div className="preview__experience__name">
            {experience.experienceName}
          </div>
          <div className="preview__experience__role">
            {experience.experienceRole}
          </div>
          <div className="preview__experience__description">
            {experience.experienceDescription}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="preview__experience">
      <h3 id="preview__experience_header" className="preview__header">
        Experience
      </h3>
      <div className="column preview__gap_smaller">{experiencesArr}</div>
    </section>
  );
}
