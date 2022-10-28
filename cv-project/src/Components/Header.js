import GenerateExampleIcon from "../Images/generate-example-icon.svg";
import DownloadIcon from "../Images/download-icon.svg";
import ExportIcon from "../Images/export-icon.svg";

export default function Header(props) {
  return (
    <header className="header">
      <div
        className="column header-generate-group"
        onClick={props.generateExample}
      >
        <img id="generate-example-icon" src={GenerateExampleIcon} />
        <h1>
          Generate <br></br> Example CV
        </h1>
      </div>
      <div className="column header-generate-group">
        <img id="export-icon" src={ExportIcon} />
        <h1>
          Export<br></br>to PDF
        </h1>
      </div>
      <div className="row between modetoggle">
        <h2 id="header--mode">{props.mode}</h2>
        <div id="header--togglebox">
          <label className="switch">
            <input
              type="checkbox"
              name="isPreviewing"
              id="isPreviewing"
              checked={props.data.isPreviewing}
              onClick={props.handleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
}
