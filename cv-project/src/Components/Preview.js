import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";
export default function Preview(props) {
  let bannerStyle;
  if (props.data.banner === "purple") {
    bannerStyle = Purple;
  }
  if (props.data.banner === "orange") {
    bannerStyle = Orange;
  }
  if (props.data.banner === "bluegrey") {
    bannerStyle = Bluegrey;
  }
  if (props.data.banner === "bluered") {
    bannerStyle = Bluered;
  }

  return (
    <div className="column">
      <div
        id="preview__banner"
        style={{ backgroundImage: `url(${bannerStyle})` }}
      ></div>
    </div>
  );
}
