export default function Photo(props) {
  let photo = `url(${props.photoFile}`;
  console.log("photo", photo);

  function toggleActive() {
    return props.activeComponentToggle(
      "photo",
      props.activeComponentData.experience
    );
  }
  return (
    <section id="photo" className="column">
      <h3
        id="photoComponent"
        name="photo"
        value={props.activeComponentData.graphics}
        onClick={function () {
          toggleActive();
        }}
      >
        Photo
      </h3>
      <div className="column">
        <div className="row">
          <div className="row">
            <label className="fileOption" htmlFor="upload">
              Upload File
            </label>
            <input
              name="fileOption"
              value="upload"
              type="radio"
              id="upload"
              checked={props.data.fileOption === "upload"}
              onChange={props.handleChange}
            />
          </div>
          <div className="row">
            <label className="fileOption" htmlFor="importURL">
              Import URL
            </label>
            <input
              name="fileOption"
              value="importURL"
              type="radio"
              id="importURL"
              checked={props.data.fileOption === "importURL"}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="photoFile"
          name="photoFile"
          onChange={props.changePhoto}
        />
        <div className="column duo">
          <label className="weight--slight">Image URL</label>
          <input
            type="text"
            placeholder="Paste image URL"
            name="imageURLString"
          />
        </div>
        <img src={photo}></img>
      </div>
    </section>
  );
}
