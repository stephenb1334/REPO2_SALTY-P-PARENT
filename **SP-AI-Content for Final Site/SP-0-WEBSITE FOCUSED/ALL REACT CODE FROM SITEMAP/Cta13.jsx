"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Book Your Adventure Today!
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Experience the beauty of Gulfport's waters with our unforgettable
            boat tours. Whether you're looking for a thrilling dolphin encounter
            or a serene sunset cruise, we have the perfect excursion for you!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Explore Tour Options">Explore Tour Options</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
