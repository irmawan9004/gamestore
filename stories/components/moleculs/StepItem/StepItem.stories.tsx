import { Meta } from "@storybook/react";
import StepItem, {
  StepItemProps,
} from "../../../../pages/components/moleculs/StepItem";

export default {
  title: "Component/Moleculs/GameItem",
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "/icon/step1.svg",
  title: "1.Start",
  description1: "Pilih salah satu game",
  description2: "yang ingin kamu top up",
};
