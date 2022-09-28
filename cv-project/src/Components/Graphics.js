import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";

export default function Graphics() {
  return (
    <section id="graphics" className="column">
      <div className="column  banner__duo">
        <label
          className="banner"
          htmlFor="purple"
          style={{
            backgroundImage: `url(${Purple})`,
          }}
        ></label>
        <input type="radio" id="purple" />
      </div>

      <div className="column banner__duo">
        <label
          className="banner"
          htmlFor="orange"
          style={{
            backgroundImage: `url(${Orange})`,
          }}
        ></label>
        <input type="radio" id="orange" />
      </div>

      <div className="column banner__duo">
        <label
          className="banner"
          htmlFor="bluegrey"
          style={{
            backgroundImage: `url(${Bluegrey})`,
          }}
        ></label>
        <input type="radio" id="bluegrey" />
      </div>

      <div className="column banner__duo">
        <label
          className="banner"
          htmlFor="bluered"
          style={{
            backgroundImage: `url(${Bluered})`,
          }}
        ></label>
        <input type="radio" id="bluered" />
      </div>
    </section>
  );
}
