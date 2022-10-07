export default function PreviewEducation(props) {
  const educations = props.educationModules;

  const educationArr = educations.map(function (education) {
    return (
      <div className="row preview__education__mod">
        <div className="column preview__education__dates">
          <div>{education.educationStarting}&nbsp;-</div>
          <br></br>
          <div>{education.educationEnding}</div>
        </div>
        <div className="column preview__education__mod__description">
          <div className="preview__education__name">
            {education.educationName}
          </div>
          <div className="preview__education__degree">
            {education.degreeName}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="preview__education" className="column preview__gap_larger">
      <h3 id="preview__education__header" className="preview__header">
        Education
      </h3>
      <div className="column preview__gap_largest">{educationArr}</div>
    </section>
  );
}
