import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import "./Experience.css";
import Personal from "./Components/Personal";
import Experience from "./Components/Experience";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [experienceModules, setExperienceModules] = React.useState([
    {
      experienceName: "",
      experienceStarting: "",
      experienceEnding: "",
      experienceRole: "",
      experienceDescription: "",
    },
    {
      experienceName: "",
      experienceStarting: "",
      experienceEnding: "",
      experienceRole: "",
      experienceDescription: "",
    },
  ]);

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
  });

  console.table(formData);

  React.useEffect(
    function () {
      colorComponentHeadings();
    },
    [activeComponent]
  );

  function changeExperience(event) {
    const { name, value, id } = event.target;
    console.log(name, value, id);
    setExperienceModules(function (prevExperience) {
      let newArray = [...prevExperience];
      newArray[id] = {
        ...prevExperience[id],
        [name]: value,
      };
      return newArray;
    });
    console.log("newExperienceModules", experienceModules);
  }

  function addExperience() {
    setExperienceModules(function (prev) {
      return [
        ...prev,
        {
          moduleID: nanoid(),
          experienceName: "Rebecca's Roasthouse",
          experienceStarting: "1993",
          experienceEnding: "1999",
          experienceRole: "Cook",
          experienceDescription: "Smokin' Hot!",
        },
      ];
    });
  }

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
      <Experience
        data={formData}
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
        experienceModules={experienceModules}
        addExperience={addExperience}
        changeExperience={changeExperience}
      />
    </div>
  );
}

export default App;
