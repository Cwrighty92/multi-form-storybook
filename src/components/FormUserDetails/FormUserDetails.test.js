import React from "react";

export const FormUserDetails = ({
  nextStep,
  firstName,
  lastName,
  email,
  handleChange,
}) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={continueStep}>
      <label htmlFor="firstName">Enter Your First Name </label>
      <input
        id="firstName"
        value={firstName}
        onChange={handleChange("firstName")}
      />

      <br />
      <label htmlFor="lastName">Enter Your Last Name </label>
      <input
        id="lastName"
        value={lastName}
        onChange={handleChange("lastName")}
      />
      <br />
      <label htmlFor="email">Enter Your Email </label>
      <input id="email" value={email} onChange={handleChange("email")} />

      <br />
      <button>Continue</button>
    </form>
  );
};
