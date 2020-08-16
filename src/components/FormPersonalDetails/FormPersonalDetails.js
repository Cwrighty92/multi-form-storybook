import React from "react";

export const FormPersonalDetails = ({ moveStep, onChange, values }) => {
  const { city, occupation, bio } = values;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        moveStep("forward");
      }}
    >
      <label htmlFor="city">Enter Your City </label>
      <input id="city" name="city" value={city} onChange={onChange} />

      <br />
      <label htmlFor="occupation">Enter Your occupation</label>
      <input
        id="occupation"
        name="occupation"
        value={occupation}
        onChange={onChange}
      />
      <br />

      <label htmlFor="bio">Enter Your bio </label>
      <input id="bio" name="bio" value={bio} onChange={onChange} />
      <br />

      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          moveStep("back");
        }}
      >
        Back
      </button>
      <button>Continue</button>
    </form>
  );
};
