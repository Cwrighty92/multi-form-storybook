import React from "react";

import { FormUserDetails } from "./FormUserDetails";

export default {
  title: "Forms/FormUserDetails",
  component: FormUserDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <FormUserDetails onChange={() => {}} values={{}} />;

export const Primary = Template.bind({});
