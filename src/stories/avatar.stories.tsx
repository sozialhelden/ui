import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const meta = {
  title: "atoms/Avatar",
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://github.com/id-Software.png"
        alt="@id-Software"
      />
      <AvatarFallback>ID</AvatarFallback>
    </Avatar>
  ),
};
