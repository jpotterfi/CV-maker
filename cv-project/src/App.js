import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import "./Experience.css";
import Personal from "./Components/Personal";
import Experience from "./Components/Experience";
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
    country: "",
    state: "AL",
    zipcode: "",
    phone: "",
    email: "",
    experience: [
      {
        experienceName: "Jeremy's Dojo",
        experienceStarting: "",
        experienceEnding: "",
        experienceRole: "",
        experienceDescription: "",
      },
    ],
  });

  console.table(formData);

  React.useEffect(
    function () {
      colorComponentHeadings();
    },
    [activeComponent]
  );

  function colorComponentHeadings() {
    for (const property in activeComponent) {
      if (activeComponent[property]) {
        let active = document.getElementById(property + "Component");
        active.style.color = "#1f1f1f";
      }
      if (!activeComponent[property]) {
        let unactive = document.getElementById(property + "Component");

        unactive.style.color = "#C3C3C3";
      }
    }
  }

  function changeActiveComponent(name, value) {
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
    // console.log("handling a change");
    console.log(event);
    if (typeof event !== "object") {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          phone: event,
        };
      });
    } else {
      const { name, value, type, checked, className, id } = event.target;
      if (className === "experience") {
        if (name === "experienceName") {
          let experience = formData.experience;
          for (const property in experience[id]) {
            if (property === name) {
              experience[id].experienceName = value;
            }
          }
          setFormData((prevFormData) => {
            return {
              ...prevFormData,
              experience,
            };
          });
        }
      } else {
        setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
          };
        });
      }
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
      <Experience
        handleChange={handleChange}
        data={formData}
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
      />
    </div>
  );
}

export default App;
