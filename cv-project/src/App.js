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
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
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
