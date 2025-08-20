import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/switch.tsx";

const meta = {
  title: "atoms/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
