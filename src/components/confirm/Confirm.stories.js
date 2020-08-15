import React from "react";

import { Confirm } from "./Confirm";

export default {
  title: "Confirm/Confirm",
  component: Confirm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <Confirm />;

export const Primary = Template.bind({});
