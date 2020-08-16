import React from "react";

export const FormUserDetails = ({ moveStep, onChange, values, dispatch }) => {
  console.log(dispatch);
  const { firstName, lastName, email } = values;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        moveStep("forward");
      }}
    >
      <label htmlFor="firstName">Enter Your First Name </label>
      <input
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={onChange}
      />

      <br />
      <label htmlFor="lastName">Enter Your Last Name </label>
      <input
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={onChange}
      />
      <br />
      <label htmlFor="email">Enter Your Email </label>
      <input id="email" name="email" value={email} onChange={onChange} />
      <br />
      <button>Continue</button>
    </form>
  );
};
