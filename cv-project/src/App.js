import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import Personal from "./Components/Personal";
import React from "react";

function App() {
  const [activeComponent, setActiveComponent] = React.useState({
    personal: false,
    experience: false,
    education: false,
    skills: false,
    graphics: false,
    photo: false,
  });
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    birthdayDay: "",
    birthdayMonth: "",
    birthdayYear: "",
    isUSAddress: true,
    addressUSLineOne: "",
    addressUSLineTwo: "",
    city: "",
    state: "AL",
    zipcode: "",
    phone: "",
    email: "",
  });
  // console.table(formData);

  console.table(activeComponent);

  React.useEffect(
    function () {
      colorComponentHeadings();
    },
    [activeComponent]
  );

  function colorComponentHeadings() {
    for (const property in activeComponent) {
      console.log(property);
      if (activeComponent[property]) {
        console.log(property + "is true");
        let active = document.getElementById(property + "Component");
        active.style.color = "#1f1f1f";
      }
      if (!activeComponent[property]) {
        console.log(property + "is false");
        let unactive = document.getElementById(property + "Component");

        unactive.style.color = "#C3C3C3";
      }
    }
  }

  function changeActiveComponent(name, value) {
    console.log("changeActiveComponent");
    console.log(name, !value);
    setActiveComponent(function (prevComponents) {
      return {
        ...prevComponents,
        [name]: !value,
      };
    });
  }

  function handleChange(event) {
    //handles phone entry, but in a bad way
    //maybe create separate handleChange for phone
    //if inputs become too crazy
    if (typeof event !== "object") {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          phone: event,
        };
      });
    } else {
      const { name, value, type, checked } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }

  return (
    <div className="App">
      <Header mode="Entry Mode" />
      <Personal
        handleChange={handleChange}
        data={formData}
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
      />
    </div>
  );
}

export default App;
