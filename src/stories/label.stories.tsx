import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label.tsx";

const meta = {
  title: "atoms/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Your email address",
  },
};
