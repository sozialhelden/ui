import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider.tsx";

const meta = {
  title: "atoms/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};
