import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";

export default function Graphics(props) {
  function toggleActive() {
    return props.activeComponentToggle(
      "graphics",
      props.activeComponentData.graphics
    );
  }
  return (
    <section id="graphics" className="column">
      <h3
        id="graphicsComponent"
        name="graphics"
        value={props.activeComponentData.graphics}
        onClick={function () {
          toggleActive();
        }}
      >
        Graphics
      </h3>
      {props.activeComponentData.graphics && (
        <div>
          <div className="column  banner__duo">
            <label
              className="banner"
              htmlFor="purple"
              style={{
                backgroundImage: `url(${Purple})`,
              }}
            ></label>
            <input
              name="banner"
              value="purple"
              type="radio"
              id="purple"
              onChange={props.handleChange}
              checked={props.data.banner === "purple"}
            />
          </div>

          <div className="column banner__duo">
            <label
              className="banner"
              htmlFor="orange"
              style={{
                backgroundImage: `url(${Orange})`,
              }}
            ></label>
            <input
              name="banner"
              value="orange"
              type="radio"
              id="orange"
              onChange={props.handleChange}
              checked={props.data.banner === "orange"}
            />
          </div>

          <div className="column banner__duo">
            <label
              className="banner"
              htmlFor="bluegrey"
              style={{
                backgroundImage: `url(${Bluegrey})`,
              }}
            ></label>
            <input
              name="banner"
              value="bluegrey"
              type="radio"
              id="bluegrey"
              onChange={props.handleChange}
              checked={props.data.banner === "bluegrey"}
            />
          </div>

          <div className="column banner__duo">
            <label
              className="banner"
              htmlFor="bluered"
              style={{
                backgroundImage: `url(${Bluered})`,
              }}
            ></label>
            <input
              value="bluered"
              name="banner"
              type="radio"
              id="bluered"
              onChange={props.handleChange}
              checked={props.data.banner === "bluered"}
            />
          </div>
        </div>
      )}
    </section>
  );
}
