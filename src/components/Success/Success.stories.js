import React from "react";

import { Success } from "./Success";

export default {
  title: "Success/Success",
  component: Success,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <Success />;

export const Primary = Template.bind({});
