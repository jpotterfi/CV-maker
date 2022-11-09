import Button from "@mui/material/Button";

export default function Photo(props) {
  let photo = `url(${props.photoFile}`;

  function toggleActive() {
    return props.activeComponentToggle(
      "photo",
      props.activeComponentData.photo
    );
  }
  return (
    <section id="photo" className="column">
      <h3
        id="photoComponent"
        name="photo"
        value={props.activeComponentData.photo}
        onClick={function () {
          toggleActive();
        }}
      >
        <div className="headerText">Photo</div>
      </h3>
      {props.activeComponentData.photo && (
        <div className="column form-gap">
          {/* <div className="row">
            <label className="usePhoto" htmlFor="usePhoto">
              Use a photo
            </label>
            <input
              name="usePhoto"
              type="checkbox"
              id="usePhoto"
              checked={props.data.usePhoto}
              onChange={props.handleChange}
            />
          </div> */}
          <div id="photo__label-preview-duo" className="form-gap">
            <Button variant="contained" component="label" id="uploadButton">
              Upload
              <input
                hidden
                accept="image/*"
                type="file"
                onInput={props.changePhoto}
              />
            </Button>
            <div id="photo__label-preview-text-duo">
              <div className="photo__preview__text">Photo Preview</div>
              <div
                id="preview"
                style={{
                  backgroundImage: `url(${props.photoFile})`,
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  border: "8px solid black",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
