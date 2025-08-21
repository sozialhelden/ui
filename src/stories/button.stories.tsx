import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button.tsx";

const meta = {
  title: "atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
