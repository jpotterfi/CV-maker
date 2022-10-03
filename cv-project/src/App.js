import "./App.css";
import "./Graphics.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import "./Experience.css";
import Personal from "./Components/Personal";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Graphics from "./Components/Graphics";
import Photo from "./Components/Photo";
import React from "react";
import { nanoid } from "nanoid";
import { hover } from "@testing-library/user-event/dist/hover";

function App() {
  const [photoFile, setPhotoFile] = React.useState("");

  console.log("photoFile", photoFile);
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
    banner: "purple",
    usePhoto: true,
  });

  React.useEffect(
    function () {
      colorComponentHeadings();
    },
    [activeComponent]
  );

  function changePhoto(event) {
    setPhotoFile(URL.createObjectURL(event.target.files[0]));
  }

  console.log("photoFile", photoFile);

  function changeSkill(event) {
    const { name, value, id } = event.target;

    setSkillsModules(function (prevSkills) {
      let newArray = [...prevSkills];
      newArray[id] = value;
      return newArray;
    });
  }

  console.log(formData.photoFile);

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
    console.log("coloringHeadings");
    for (const property in activeComponent) {
      let component = document.getElementById(property + "Component");
      if (activeComponent[property]) {
        component.style.color = "#1f1f1f";
      }
      if (!activeComponent[property]) {
        component.style.color = "#C3C3C3";
      }
    }
  }

  function changeActiveComponent(name, value) {
    setActiveComponent(function (prevComponents) {
      let newObj = prevComponents;
      for (const property in newObj) {
        if (property !== name) {
          newObj[property] = false;
        }
      }
      return {
        ...prevComponents,
        [name]: !value,
      };
    });
  }
  // return {
  //   ...prevComponents,
  //   [name]: !value,
  // };

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
      console.log(name, value, type, checked);
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
      <Graphics
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
        data={formData}
        handleChange={handleChange}
      />
      <Photo
        activeComponentData={activeComponent}
        activeComponentToggle={changeActiveComponent}
        data={formData}
        handleChange={handleChange}
        changePhoto={changePhoto}
        photoFile={photoFile}
      />
    </div>
  );
}

export default App;
