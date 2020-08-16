import React from "react";

import { UserForm } from "./UserForm";

export default {
  title: "UserForm/UserForm",
  component: UserForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <UserForm />;

export const Primary = Template.bind({});
