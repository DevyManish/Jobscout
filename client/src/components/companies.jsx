"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export const Companies = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full px-40 py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 items-center">
          <h3 className="text-sm tracking-tighter font-semibold text-gray-500 text-center">
            TRUSTED BY MARKET LEADERS
          </h3>
          <div className="relative w-full py-2">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {companies.map((logo, idx) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={idx}>
                    <Image
                      src={`https://cdn.magicui.design/companies/${logo}.svg`}
                      className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                      alt={logo}
                      width={80}
                      height={80}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
