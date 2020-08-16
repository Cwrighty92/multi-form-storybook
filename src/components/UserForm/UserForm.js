import React, { useState, useReducer } from "react";
import { FormUserDetails } from "../FormUserDetails/FormUserDetails";
import { FormPersonalDetails } from "../FormPersonalDetails/FormPersonalDetails";
import { Confirm } from "../confirm/Confirm";
import { Success } from "../Success/Success";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

export const UserForm = () => {
  const [step, updateStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    e.preventDefault();
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const moveStep = (direction) => {
    updateStep(direction === "forward" ? step + 1 : step - 1);
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          values={state}
          moveStep={moveStep}
          onChange={onChange}
        />
      );

    case 2:
      return (
        <FormPersonalDetails
          values={state}
          moveStep={moveStep}
          onChange={onChange}
        />
      );
    case 3:
      return <Confirm moveStep={moveStep} />;
    case 4:
      return <Success />;
    default:
      return <div></div>;
  }
};
