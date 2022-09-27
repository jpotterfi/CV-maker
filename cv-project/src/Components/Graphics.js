import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";

export default function Graphics() {
  return (
    <section id="graphics">
      <input type="radio" id="purple" />
      <label htmlFor="purple">purple</label>
      <br />
      <input type="radio" id="orange" />
      <label htmlFor="orange">orange</label>
      <br />
      <input type="radio" id="bluegrey" />
      <label htmlFor="bluegrey">bluegrey</label>
      <br />
      <input type="radio" id="bluered" />
      <label htmlFor="bluered">bluered</label>
      <br />
    </section>
  );
}
