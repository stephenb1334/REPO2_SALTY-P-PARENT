"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about our private tours and
            customization options.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are private tours?
            </h2>
            <p>
              Private tours are exclusive excursions designed for you and your
              group. You can enjoy personalized experiences tailored to your
              preferences. Whether it's a family outing or a special event, our
              private tours ensure a memorable adventure.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I customize my tour?
            </h2>
            <p>
              Absolutely! We offer a variety of customization options to suit
              your interests. From the route to activities, you can create a
              unique experience that fits your desires.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What should I bring?
            </h2>
            <p>
              We recommend bringing sunscreen, hats, and sunglasses for sun
              protection. Additionally, pack any snacks or drinks you’d like to
              enjoy during the tour. Don’t forget your camera to capture the
              beautiful moments!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is the duration?
            </h2>
            <p>
              Our private tours typically last between two to four hours,
              depending on your preferences. You can choose the duration that
              best fits your schedule. Enjoy a leisurely pace as you explore the
              stunning waterways.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a minimum?
            </h2>
            <p>
              Yes, our private tours accommodate groups of 1 to 6 passengers.
              This ensures an intimate experience for you and your guests. If
              you have a larger group, please contact us for special
              arrangements.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
