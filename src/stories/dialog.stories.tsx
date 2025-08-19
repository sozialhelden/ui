import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../components/ui/dialog";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  argTypes: {
    open: { control: "boolean", description: "Controlled open state" },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state (uncontrolled)",
    },
    modal: {
      control: "boolean",
      description: "Modal behavior (focus trap, outside interaction disabled)",
    },
    children: { control: false },
  },
  args: {
    open: false,
    defaultOpen: false,
    modal: true,
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ["!dev"],
  render: (args) => {
    const [controlledOpen, setControlledOpen] = useState<boolean | undefined>(
      typeof args.open === "boolean" ? args.open : undefined,
    );

    const controlled =
      typeof args.open === "boolean"
        ? { open: controlledOpen, onOpenChange: setControlledOpen }
        : {};

    return (
      <Dialog {...args} {...controlled}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              Short description describing the purpose of this dialog.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <p>
              This example shows how to compose the dialog primitives: trigger,
              overlay, content, header, title, description, and footer.
            </p>
            <p>
              Close via the close buttons, pressing ESC, or clicking outside
              (when modal behavior allows).
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Confirm</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};
