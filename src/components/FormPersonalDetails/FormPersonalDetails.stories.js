import React from "react";

import { FormPersonalDetails } from "./FormPersonalDetails";

export default {
  title: "Forms/FormPersonalDetails",
  component: FormPersonalDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <FormPersonalDetails onChange={() => {}} values={{}} />;

export const Primary = Template.bind({});
