export default function PreviewExperience(props) {
  const experiences = props.experienceModules;

  const experiencesArr = experiences.map(function (experience, index) {
    return (
      <div key={index} className="row preview__experience__mod">
        <div
          className="column preview__experience__dates"
          style={props.subHeaderColor}
        >
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
    <section id="preview__experience" className="column preview__gap_larger">
      <h3
        id="preview__experience_header"
        className="preview__header"
        style={props.headerColor}
      >
        Experience
      </h3>
      <div className="column preview__gap_largest">{experiencesArr}</div>
    </section>
  );
}
