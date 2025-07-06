"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atom/carousel";

import Autoplay from "embla-carousel-autoplay";

export function AutoPlayCarousel({
  elements,
}: Readonly<{
  elements: React.ReactNode[];
}>) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex w-full">
        {elements?.map((element, index) => (
          <CarouselItem key={index} className="p-0">
            {elements[index] || <div className="text-gray-500">No Content</div>}{" "}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="fixed left-5 z-10" />
      <CarouselNext className="fixed right-5 z-10" />
    </Carousel>
  );
}
