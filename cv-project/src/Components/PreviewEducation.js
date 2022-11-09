export default function PreviewEducation(props) {
  const educations = props.educationModules;

  const educationArr = educations.map(function (education, index) {
    return (
      <div key={index}>
        {education.educationName && (
          <div className="row preview__education__mod">
            <div
              className="column preview__education__dates"
              style={props.subHeaderColor}
            >
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
        )}
      </div>
    );
  });

  return (
    <section id="preview__education" className="column preview__gap_larger">
      <h3
        id="preview__education__header"
        className="preview__header"
        style={props.headerColor}
      >
        Education
      </h3>
      <div className="column preview__gap_largest">{educationArr}</div>
    </section>
  );
}
