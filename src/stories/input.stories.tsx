import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input.tsx";

const meta = {
  title: "atoms/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Email",
  },
};
