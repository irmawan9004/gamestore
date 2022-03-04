import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../pages/components/atoms/Input";

export default {
  title: "Component/Atoms/Input",
  component: Input,
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
