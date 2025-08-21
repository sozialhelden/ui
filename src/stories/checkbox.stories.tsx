import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";

const meta = {
  title: "atoms/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const id = useId();
    return (
      <div className="flex gap-2">
        <Checkbox id={id} />
        <Label htmlFor={id}>Checkbox</Label>
      </div>
    );
  },
};
