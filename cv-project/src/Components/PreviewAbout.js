export default function PreviewAbout(props) {
  console.log(props.data.firstName);
  console.log(props.data.lastName);

  //   firstName: "",
  //   lastName: "",
  //   birthdayDay: "",
  //   birthdayMonth: "",
  //   birthdayYear: "",
  //   isUSAddress: true,
  //   addressUSLineOne: "",
  //   addressUSLineTwo: "",
  //   city: "",
  //   country: "",
  //   state: "AL",
  //   zipcode: "",
  //   phone: "",
  //   email: "",
  //   banner: "purple",
  //   usePhoto: true,
  //   isPreviewing: false,
  return (
    <section id="preview__about" className="column preview__gap_larger">
      <h3
        id="preview__about_header"
        className="preview__header"
        style={props.headerColor}
      >
        About
      </h3>
      <div className="column preview__gap_smaller">
        <div className="row preview__gap_smaller">
          <h4
            className="preview__about__subheading"
            style={props.subHeaderColor}
          >
            NAME
          </h4>
          <h5 className="preview__about__output">
            {props.data.firstName + " " + props.data.lastName}
          </h5>
        </div>
        <div className="row preview__gap_smaller">
          <h4
            className="preview__about__subheading"
            style={props.subHeaderColor}
          >
            D.O.B
          </h4>
          <h5 className="preview__about__output">
            {props.data.birthdayDay &&
              props.data.birthdayMonth &&
              props.data.birthdayYear &&
              props.data.birthdayMonth +
                "/" +
                props.data.birthdayDay +
                "/" +
                props.data.birthdayYear}
          </h5>
        </div>
        <div className="row preview__gap_smaller" id="preview__about__address">
          <h4
            className="preview__about__subheading"
            style={props.subHeaderColor}
            id="preview__about__address-subheader"
          >
            ADDRESS
          </h4>
          <div className="column">
            {props.data.addressUSLineOne && (
              <div id="preview__about__address-output" className="column">
                <h5 className="preview__about__output">
                  {props.data.addressUSLineOne}
                </h5>
                <h5 className="preview__about__output">
                  {props.data.addressUSLineTwo}
                </h5>
                <h5 className="preview__about__output">
                  {(props.data.city && props.data.city + ", ") +
                    (props.data.isUSAddress
                      ? props.data.state
                      : props.data.country) +
                    " " +
                    props.data.zipcode}
                </h5>
              </div>
            )}
          </div>
        </div>
        <div className="row preview__gap_smaller">
          <h4
            className="preview__about__subheading"
            style={props.subHeaderColor}
          >
            EMAIL
          </h4>
          <h5 className="preview__about__output">{props.data.email}</h5>
        </div>
        <div className="row preview__gap_smaller">
          <h4
            className="preview__about__subheading"
            style={props.subHeaderColor}
          >
            PHONE
          </h4>
          <h5 className="preview__about__output">{props.data.phone}</h5>
        </div>
      </div>
    </section>
  );
}
