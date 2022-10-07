import "./App.css";
import "./Components/Preview";
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
import "./Preview.css";
import { nanoid } from "nanoid";
import { hover } from "@testing-library/user-event/dist/hover";
import Preview from "./Components/Preview";

function App() {
  const [photoFile, setPhotoFile] = React.useState("");

  console.log("photoFile", photoFile);
  const [skillsModules, setSkillsModules] = React.useState([
    "React",
    "Javascript",
    "Photohop",
  ]);

  const [educationModules, setEducationModules] = React.useState([
    {
      educationName: "Oberlin",
      degreeName: "Bachelor's Degree",
      educationStarting: "2010",
      educationEnding: "2014",
    },
    {
      educationName: "Odin Project",
      degreeName: "Full-Stack Development Certification",
      educationStarting: "2021",
      educationEnding: "2022",
    },
  ]);

  const [experienceModules, setExperienceModules] = React.useState([
    {
      experienceName: "Jeremy's Dojo",
      experienceStarting: "1992",
      experienceEnding: "1993",
      experienceRole: "Instructor",
      experienceDescription:
        "Led the development of Harvest Farm 2077, an award-winning farm simulation game set in a futuristic Tokyo setting. Headed up a team of five developers and collaborated with many departments to bring the game to life.",
    },
    {
      experienceName: "Jeremy's Dojo",
      experienceStarting: "1992",
      experienceEnding: "1993",
      experienceRole: "Instructor",
      experienceDescription:
        "Led the development of Harvest Farm 2077, an award-winning farm simulation game set in a futuristic Tokyo setting. Headed up a team of five developers and collaborated with many departments to bring the game to life.",
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
    isPreviewing: false,
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
      <Header
        mode={formData.isPreviewing ? "Preview Mode" : "Edit Mode"}
        handleChange={handleChange}
        data={formData}
      />
      {!formData.isPreviewing ? (
        <div className="App">
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
      ) : (
        <Preview
          data={formData}
          photoFile={photoFile}
          experienceModules={experienceModules}
          educationModules={educationModules}
          skillsModules={skillsModules}
        />
      )}
    </div>
  );
}

export default App;
