import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import "./Personal.css";
import Personal from "./Components/Personal";
import React from "react";

function App() {
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
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log(formData.firstName, formData.lastName);

  return (
    <div className="App">
      <Header mode="Entry Mode" />
      <Personal handleChange={handleChange} data={formData} />
    </div>
  );
}

export default App;
