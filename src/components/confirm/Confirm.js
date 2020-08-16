import React from "react";

export const Confirm = ({ moveStep }) => {
  return <button onClick={() => moveStep("forward")}>Confirm</button>;
};
