import React from "react";

export const FormPersonalDetails = ({
  nextStep,
  previousStep,
  city,
  bio,
  occupation,
  handleChange,
}) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backpreviousStep = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <form onSubmit={continueStep}>
      <label htmlFor="city">Enter Your City </label>
      <input id="city" value={city} onChange={handleChange("city")} />

      <br />
      <label htmlFor="occupation">Enter Your occupation</label>
      <input
        id="occupation"
        value={occupation}
        onChange={handleChange("occupation")}
      />
      <br />

      <label htmlFor="bio">Enter Your bio </label>
      <input id="bio" value={bio} onChange={handleChange("bio")} />
      <br />

      <br />
      <button onClick={backpreviousStep}>Back</button>
      <button>Continue</button>
    </form>
  );
};
