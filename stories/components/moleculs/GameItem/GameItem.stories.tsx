import { Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../pages/components/moleculs/GameItem";

export default {
  title: "Component/Moleculs/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Super Mechs",
  category: "Mobile",
  thumbnail: "/img/Thumbnail.png",
};
