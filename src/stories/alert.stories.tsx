import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";

const meta = {
  title: "components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>Lorem Ipsum dolor sit amet.</AlertDescription>
    </Alert>
  ),
};
