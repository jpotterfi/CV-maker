export default function Personal(props) {
  return (
    <section id="personal">
      <form>
        <div className="row">
          <div className="column">
            <label>
              First Name
              <input type="text" placeholder="First Name" name="firstName" />
            </label>
          </div>
          <div className="column">
            <label>
              Last Name
              <input type="text" placeholder="Last Name" name="lastName" />
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}
