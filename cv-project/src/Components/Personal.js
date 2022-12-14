import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Personal(props) {
  // console.log("toggleActive");
  function toggleActive() {
    return props.activeComponentToggle(
      "personal",
      props.activeComponentData.personal
    );
  }

  return (
    <section id="personal">
      <h3
        id="personalComponent"
        name="personal"
        value={props.activeComponentData.personal}
        onClick={function () {
          toggleActive();
        }}
      >
        <div className="headerText">Personal</div>
      </h3>
      {props.activeComponentData.personal && (
        <form>
          <div className="row between">
            <div className="column duo">
              <label className="weight--slight">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={props.handleChange}
                value={props.data.firstName}
              />
            </div>
            <div className="column duo">
              <label className="weight--slight">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={props.handleChange}
                value={props.data.lastName}
              />
            </div>
          </div>
          <div className="column">
            <label className="weight--slight">Birthday</label>
            <div className="row birthday">
              <select
                id="birthdayMonth"
                value={props.data.birthdayMonth}
                onChange={props.handleChange}
                name="birthdayMonth"
              >
                <option value="">MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                id="birthdayDay"
                value={props.data.birthdayDay}
                onChange={props.handleChange}
                name="birthdayDay"
              >
                <option value="">DD</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select
                id="birthdayYear"
                value={props.data.birthdayYear}
                onChange={props.handleChange}
                name="birthdayYear"
              >
                <option value="">YYYY</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <input
                type="checkbox"
                id="isUSAddress"
                checked={props.data.isUSAddress}
                name="isUSAddress"
                onChange={props.handleChange}
              />
              <label
                htmlFor="isUSAddress"
                id="isUSAddress__label"
                className="weight--slight  fs--smaller "
              >
                US Address
              </label>
            </div>

            <div className="column form-gap">
              <div className="column">
                <label className="weight--slight">Street Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  name="addressUSLineOne"
                  onChange={props.handleChange}
                  value={props.data.addressUSLineOne}
                />
              </div>
              <input
                type="text"
                placeholder="Line 2, if applicable"
                name="addressUSLineTwo"
                onChange={props.handleChange}
                value={props.data.addressUSLineTwo}
              />
              <div className="row between">
                <div className="column triple-partner">
                  <label className="weight--slight">City</label>
                  <input
                    id="city"
                    value={props.data.city}
                    onChange={props.handleChange}
                    name="city"
                    placeholder="City"
                  />
                </div>
                {props.data.isUSAddress ? (
                  <div className="column">
                    <label className="weight--slight">State</label>
                    <select
                      id="state"
                      value={props.data.state}
                      onChange={props.handleChange}
                      name="state"
                    >
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>
                ) : (
                  <div className="column triple-partner">
                    <label className="weight--slight">Country</label>
                    <input
                      id="country"
                      value={props.data.country}
                      onChange={props.handleChange}
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                )}

                <div className="column triple-partner">
                  <label className="weight--slight">ZIP Code</label>
                  <input
                    id="zipcode"
                    value={props.data.zipcode}
                    onChange={props.handleChange}
                    name="zipcode"
                    placeholder="12345"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label className="weight--slight">Phone</label>
              <PhoneInput
                type="text"
                placeholder="Enter phone number"
                value={props.data.phone}
                onChange={props.handleChange}
                name="phone"
                id="phone"
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label className="weight--slight">Email</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                value={props.data.email}
                onChange={props.handleChange}
                name="email"
                id="email"
              />
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
