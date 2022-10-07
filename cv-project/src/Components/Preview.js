import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";
import PreviewAbout from "./PreviewAbout";
import PreviewExperience from "./PreviewExperience";
import PreviewEducation from "./PreviewEducation";
import PreviewSkills from "./PreviewSkills";

export default function Preview(props) {
  let photoBorderColor;
  let headerColor;
  let subHeaderColor;
  let bannerImage;
  if (props.data.banner === "purple") {
    bannerImage = Purple;
    photoBorderColor = {
      borderColor: "black",
    };
    headerColor = {
      color: "#6E44FF",
    };
    subHeaderColor = {
      color: "#EF7A85",
    };
  }
  if (props.data.banner === "orange") {
    bannerImage = Orange;
    photoBorderColor = {
      borderColor: "black",
    };
    headerColor = {
      color: "#f3a930",
    };
    subHeaderColor = {
      color: "#EF7A85",
    };
  }
  if (props.data.banner === "bluegrey") {
    bannerImage = Bluegrey;
    photoBorderColor = {
      borderColor: "black",
    };
    headerColor = {
      color: "#316DC9",
    };
    subHeaderColor = {
      color: "#816495",
    };
  }
  if (props.data.banner === "bluered") {
    bannerImage = Bluered;
    photoBorderColor = {
      borderColor: "black",
    };
    headerColor = {
      color: "#335C67",
    };
    subHeaderColor = {
      color: "#9E2A2B",
    };
  }

  let photoStyle;
  if (props.photoFile === "") {
    photoStyle = {
      backgroundColor: "white",
    };
  } else if (props.photoFile !== "") {
    photoStyle = {
      backgroundColor: "none",
      backgroundImage: `url(${props.photoFile})`,
    };
  }

  return (
    <div>
      <div
        id="preview__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      <div
        id="preview__photo"
        className="overlay"
        style={{ ...photoStyle, ...photoBorderColor }}
      ></div>

      <div id="preview__content" className="column preview__gap_larger">
        <PreviewAbout
          data={props.data}
          headerColor={headerColor}
          subHeaderColor={subHeaderColor}
        />
        <PreviewExperience
          data={props.data}
          experienceModules={props.experienceModules}
          headerColor={headerColor}
          subHeaderColor={subHeaderColor}
        />
        <PreviewEducation
          data={props.data}
          educationModules={props.educationModules}
          headerColor={headerColor}
          subHeaderColor={subHeaderColor}
        />
        <PreviewSkills
          data={props.data}
          skillsModules={props.skillsModules}
          headerColor={headerColor}
          subHeaderColor={subHeaderColor}
        />
      </div>
      <div
        id="preview__banner__footer"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
    </div>
  );
}
