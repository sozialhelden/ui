/** biome-ignore-all lint/suspicious/noArrayIndexKey: These are usage examples, and it's okay to use the array index as key here */

import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.tsx";

const meta = {
  title: "atoms/ScrollArea",
  component: ScrollArea,
  subcomponents: {
    ScrollBar,
  },
} satisfies Meta<typeof ScrollArea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="text-sm">
            v1.2.0-beta.{index}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
