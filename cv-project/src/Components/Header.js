export default function Header(props) {
  return (
    <header className="header">
      <h1>CV Maker</h1>

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
