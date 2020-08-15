import React, { useState } from "react";
import { FormUserDetails } from "./FormUserDetails/FormUserDetails";
import { FormPersonalDetails } from "./FormPersonalDetails/FormPersonalDetails";

export const UserForm = () => {
  const [step, updateStep] = useState(1);
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [email, updateEmail] = useState("");
  const [occupation, updateOccupation] = useState("");
  const [city, updateCity] = useState("");
  const [bio, updateBio] = useState("");

  const nextStep = () => {
    updateStep(step + 1);
  };

  const previousStep = () => {
    updateStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    console.log(input, e);
    switch (input) {
      case "firstName":
        updateFirstName(e.target.value);
        break;
      case "lastName":
        updateLastName(e.target.value);
        break;
      case "email":
        updateEmail(e.target.value);
        break;
      case "occupation":
        updateOccupation(e.target.value);
        break;
      case "city":
        updateCity(e.target.value);
        break;
      case "bio":
        updateBio(e.target.value);
        break;
      default:
        return console.log("none");
    }
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          previousStep={previousStep}
          nextStep={nextStep}
          handleChange={handleChange}
          occupation={occupation}
          city={city}
          bio={bio}
        />
      );
    case 3:
      return <h1>Confirm</h1>;
    case 4:
      return <h1>Success</h1>;
    default:
      return <div></div>;
  }
};
