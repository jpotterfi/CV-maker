import Button from "@mui/material/Button";

export default function Photo(props) {
  let photo = `url(${props.photoFile}`;
  console.log("photo", photo);

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
        Photo
      </h3>
      {props.activeComponentData.photo && (
        <div className="column">
          <div className="row">
            <label className="usePhoto" htmlFor="usePhoto">
              Use a Photo
            </label>
            <input
              name="usePhoto"
              type="checkbox"
              id="usePhoto"
              checked={props.data.usePhoto}
              onChange={props.handleChange}
            />
          </div>
          {props.data.usePhoto ? (
            <div>
              <Button variant="contained" component="label">
                Upload
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onInput={props.changePhoto}
                />
              </Button>
              <div
                id="preview"
                style={{
                  backgroundImage: `url(${props.photoFile})`,
                  height: "300px",
                  width: "300px",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ) : (
            <div>No Problem! We won't include a photo on the CV.</div>
          )}
        </div>
      )}
    </section>
  );
}
