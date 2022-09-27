import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import "./Experience.css";
import Personal from "./Components/Personal";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [skillsModules, setSkillsModules] = React.useState(["test"]);

  const [educationModules, setEducationModules] = React.useState([
    {
      educationName: "",
      degreeName: "",
      educationStarting: "",
      educationEnding: "",
    },
  ]);

  const [experienceModules, setExperienceModules] = React.useState([
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

  React.useEffect(
    function () {
      colorComponentHeadings();
    },
    [activeComponent]
  );

  function changeSkill(event) {
    const { name, value, id } = event.target;

    setSkillsModules(function (prevSkills) {
      let newArray = [...prevSkills];
      newArray[id] = value;
      return newArray;
    });
  }

  console.log(educationModules);

  function changeEducation(event) {
    const { name, value, id } = event.target;
    console.log(name, value, id);
    setEducationModules(function (prevEducation) {
      let newArray = [...prevEducation];
      newArray[id] = {
        ...prevEducation[id],
        [name]: value,
      };
      return newArray;
    });
  }

  function changeExperience(event) {
    const { name, value, id } = event.target;

    setExperienceModules(function (prevExperience) {
      let newArray = [...prevExperience];
      newArray[id] = {
        ...prevExperience[id],
        [name]: value,
      };
      return newArray;
    });
  }

  function addSkill() {
    setSkillsModules(function (prevSkills) {
      return [...prevSkills, ""];
    });
  }

  function addEducation() {
    setEducationModules(function (prev) {
      return [
        ...prev,
        {
          educationName: "",
          degreeName: "",
          educationStarting: "",
          educationEnding: "",
        },
      ];
    });
  }

  function addExperience() {
    setExperienceModules(function (prev) {
      return [
        ...prev,
        {
          moduleID: "",
          experienceName: "",
          experienceStarting: "",
          experienceEnding: "",
          experienceRole: "",
          experienceDescription: "",
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
      <Skills
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
        skillsModules={skillsModules}
        changeSkill={changeSkill}
        addSkill={addSkill}
      />
      <Education
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
        educationModules={educationModules}
        changeEducation={changeEducation}
        addEducation={addEducation}
      />
    </div>
  );
}

export default App;
