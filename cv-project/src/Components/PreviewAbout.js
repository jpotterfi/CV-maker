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
      <h3 id="preview__about_header" className="preview__header">
        About
      </h3>
      <div className="column preview__gap_smaller">
        <div className="row preview__gap_smaller">
          <h4>NAME</h4>
          <h5>{props.data.firstName + " " + props.data.lastName}</h5>
        </div>
        <div className="row preview__gap_smaller">
          <h4>D.O.B</h4>
          <h5>
            {props.data.birthdayMonth +
              "/" +
              props.data.birthdayDay +
              "/" +
              props.data.birthdayYear}
          </h5>
        </div>
        <div className="row preview__gap_smaller">
          <h4>ADDRESS</h4>
          <div className="column">
            <h5>{props.data.addressUSLineOne}</h5>
            <h5>
              {props.data.city +
                ", " +
                props.data.state +
                " " +
                props.data.zipcode}
            </h5>
          </div>
        </div>
        <div className="row preview__gap_smaller">
          <h4>EMAIL</h4>
          <h5>{props.data.email}</h5>
        </div>
        <div className="row preview__gap_smaller">
          <h4>PHONE</h4>
          <h5>{props.data.phone}</h5>
        </div>
      </div>
    </section>
  );
}
