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
import PlaceholderImage from "./Images/Portrait_Placeholder.png";
import JimmyPhoto from "./Images/jimmy-photo.jpeg";
import "./queries.css";

function App() {
  const [photoFile, setPhotoFile] = React.useState(PlaceholderImage);

  const [skillsModules, setSkillsModules] = React.useState([""]);

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
    isPreviewing: false,
  });

  React.useEffect(
    function () {
      //to ensure headers are loaded/in edit mode
      let personalComponent = document.getElementById("personalComponent");
      if (personalComponent) {
        colorComponentHeadings();
      } else {
        return;
      }
    },
    [activeComponent, formData.isPreviewing]
  );

  function generateExample() {
    setFormData({
      firstName: "Jimmy",
      lastName: "Wales",
      birthdayDay: "08",
      birthdayMonth: "07",
      birthdayYear: "1966",
      isUSAddress: true,
      addressUSLineOne: "500 3rd Street",
      addressUSLineTwo: "Suite 405",
      city: "San Francisco",
      country: "",
      state: "CA",
      zipcode: "94107",
      phone: "(945)-473-3422",
      email: "JWales@gmail.com",
      banner: "purple",
      usePhoto: true,
      isPreviewing: false,
    });
    setEducationModules([
      {
        educationName: "University of Alabama",
        degreeName: "Master's in Finance",
        educationStarting: "1990",
        educationEnding: "1994",
      },
      {
        educationName: "Auburn University",
        degreeName: "Bachelor's in Finance",
        educationStarting: "1986",
        educationEnding: "1990",
      },
    ]);
    setExperienceModules([
      {
        experienceName: "Wikipedia",
        experienceStarting: "2001",
        experienceEnding: "2022",
        experienceRole: "Co-Founder/Board Member",
        experienceDescription:
          "Founded a multilingual free online encyclopedia written and maintained by a community of volunteers through open collaboration and a wiki-based editing system. Wikipedia is the largest and most-read reference work in history.",
      },
      {
        experienceName: "NuPedia",
        experienceStarting: "2000",
        experienceEnding: "2001",
        experienceRole: "Editor in Chief",
        experienceDescription:
          "Managed thousands of volunteers writing articles for an online encyclopedia in all languages. Initially we found ourselves organizing the work in a very top-down, structured, academic, old-fashioned way. It was no fun for the volunteer writers because we had a lot of academic peer review committees who would criticize articles and give feedback. It was like handing in an essay at grad school, and basically intimidating to participate in.",
      },
      {
        experienceName: "Chicago Options Associates and Bomis",
        experienceStarting: "1994",
        experienceEnding: "1996",
        experienceRole: "Trader",
        experienceDescription: "Traded futures and options.",
      },
    ]);
    setPhotoFile(JimmyPhoto);
    setSkillsModules(["AWS", "Nodejs", "Go", "Kafka"]);
  }

  function changePhoto(event) {
    setPhotoFile(URL.createObjectURL(event.target.files[0]));
  }

  function changeSkill(event) {
    const { name, value, id } = event.target;

    setSkillsModules(function (prevSkills) {
      let newArray = [...prevSkills];
      newArray[id] = value;
      return newArray;
    });
  }

  function deleteSkill(event) {
    const { id } = event.target;

    setSkillsModules(function (prevSkills) {
      let newArray = [...prevSkills];

      newArray.splice(id, 1);

      return newArray;
    });
  }

  function changeEducation(event) {
    const { name, value, id } = event.target;

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

  function deleteEducation(event) {
    const { id } = event.target;
    setEducationModules(function (prevEducation) {
      let newArray = [...prevEducation];
      newArray.splice(id, 1);
      return newArray;
    });
  }

  function deleteExeperience(event) {
    const { id } = event.target;
    setExperienceModules(function (prevExperience) {
      let newArray = [...prevExperience];
      newArray.splice(id, 1);
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
      let component = document.getElementById(property + "Component");
      if (activeComponent[property]) {
        component.style.color = "#1f1f1f";
      }
      if (!activeComponent[property]) {
        component.style.color = "#C3C3C3";
      }
    }
  }

  function forcePreview() {
    setFormData(function (prev) {
      return {
        ...prev,
        isPreviewing: true,
      };
    });
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

      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }

  return (
    <div id="content">
      <Header
        mode={formData.isPreviewing ? "Preview Mode" : "Edit Mode"}
        handleChange={handleChange}
        data={formData}
        generateExample={generateExample}
        forcePreview={forcePreview}
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
            deleteExperience={deleteExeperience}
          />
          <Skills
            activeComponentData={activeComponent}
            activeComponentToggle={changeActiveComponent}
            skillsModules={skillsModules}
            changeSkill={changeSkill}
            addSkill={addSkill}
            deleteSkill={deleteSkill}
          />
          <Education
            activeComponentData={activeComponent}
            activeComponentToggle={changeActiveComponent}
            educationModules={educationModules}
            changeEducation={changeEducation}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
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
