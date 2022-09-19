import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import Personal from "./Components/Personal";
import React from "react";

function App() {
  const [activeComponent, setActiveComponent] = React.useState("");
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    birthdayDay: "",
    birthdayMonth: "",
    birthdayYear: "",
    isUSAddress: true,
    addressUSLineOne: "",
    addressUSLineTwo: "",
    city: "",
    state: "AL",
    zipcode: "",
    phone: "",
    email: "",
  });
  // console.table(formData);

  function handleChange(event) {
    //handles phone entry, but in a bad way
    //maybe create separate handleChange for phone
    //if inputs become too crazy
    if (typeof event !== "object") {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          phone: event,
        };
      });
    } else {
      const { name, value, type, checked } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    }
  }

  return (
    <div className="App">
      <Header mode="Entry Mode" />
      <Personal
        handleChange={handleChange}
        data={formData}
        activeComponent={activeComponent}
      />
    </div>
  );
}

export default App;
