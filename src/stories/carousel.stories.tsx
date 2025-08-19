import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";

const meta = {
  title: "components/Carousel",
  component: Carousel,
  subcomponents: {
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }, (_, index) => (
            <CarouselItem key={`carousel-item-${index + 1}`}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
