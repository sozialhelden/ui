import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/textarea.tsx";

const meta = {
  title: "atoms/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};
