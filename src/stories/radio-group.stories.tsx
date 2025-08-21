import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";

const meta = {
  title: "atoms/RadioGroup",
  component: RadioGroup,
  subcomponents: {
    RadioGroupItem,
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const defaultId = useId();
    const comfortableId = useId();
    const compactId = useId();

    return (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id={defaultId} />
          <Label htmlFor={defaultId}>Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id={comfortableId} />
          <Label htmlFor={comfortableId}>Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id={compactId} />
          <Label htmlFor={compactId}>Compact</Label>
        </div>
      </RadioGroup>
    );
  },
};
