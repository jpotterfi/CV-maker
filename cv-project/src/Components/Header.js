export default function Header(props) {
  return (
    <header className="header">
      <h1>CV Maker</h1>
      <div id="header--togglebox">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <h2 id="header--mode">{props.mode}</h2>
      </div>
    </header>
  );
}
