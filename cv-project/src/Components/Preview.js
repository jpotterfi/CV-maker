import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";
import PreviewAbout from "./PreviewAbout";
import PreviewExperience from "./PreviewExperience";
export default function Preview(props) {
  let colorScheme;
  let bannerImage;
  if (props.data.banner === "purple") {
    bannerImage = Purple;
    colorScheme = {
      borderColor: "#6E44FF",
    };
  }
  if (props.data.banner === "orange") {
    bannerImage = Orange;
  }
  if (props.data.banner === "bluegrey") {
    bannerImage = Bluegrey;
  }
  if (props.data.banner === "bluered") {
    bannerImage = Bluered;
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

  console.log("photoStyle", photoStyle);

  return (
    <div>
      <div
        id="preview__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      {props.data.usePhoto && (
        <div
          id="preview__photo"
          className="overlay"
          style={{ ...photoStyle, ...colorScheme }}
        ></div>
      )}
      <div id="preview__content">
        <PreviewAbout data={props.data} />
        <PreviewExperience
          data={props.data}
          experienceModules={props.experienceModules}
        />
      </div>
    </div>
  );
}
