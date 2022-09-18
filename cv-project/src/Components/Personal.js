export default function Personal(props) {
  return (
    <section id="personal">
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
        <label className="weight--slight">Birthday</label>
        <div className="row between">
          <select
            id="birthdayDay"
            value={props.data.birthdayDay}
            onChange={props.handleChange}
            name="birthdayDay"
          >
            <option value="">-- DD --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
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
            id="birthdayDay"
            value={props.data.birthdayDay}
            onChange={props.handleChange}
            name="birthdayDay"
          >
            <option value="">-- MM --</option>
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
            <option value="">-- YYYY --</option>
            <option value="1">2009</option>
            <option value="2">2008</option>
            <option value="3">2007</option>
            <option value="4">2006</option>
            <option value="5">2005</option>
            <option value="6">2004</option>
            <option value="7">2003</option>
            <option value="8">2002</option>
            <option value="9">2001</option>
            <option value="10">2000</option>
            <option value="11">1999</option>
            <option value="12">1998</option>
            <option value="13">1997</option>
            <option value="14">1996</option>
            <option value="15">1995</option>
            <option value="16">1994</option>
            <option value="17">1993</option>
            <option value="18">1992</option>
            <option value="19">1991</option>
            <option value="20">1990</option>
            <option value="21">1989</option>
            <option value="22">1988</option>
            <option value="23">1987</option>
            <option value="24">1986</option>
            <option value="25">1985</option>
            <option value="26">1984</option>
            <option value="27">1983</option>
            <option value="28">1982</option>
            <option value="29">1981</option>
            <option value="30">1980</option>
            <option value="31">1979</option>
          </select>
        </div>
      </form>
    </section>
  );
}
