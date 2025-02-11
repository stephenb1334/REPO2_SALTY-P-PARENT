"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about our public tours and how to
            customize your experience.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are public tours?
            </h2>
            <p>
              Our public tours are shared excursions aboard the Dolphin Quest,
              where you can enjoy the beauty of Gulfport's waters. These tours
              include dolphin watching, sunset cruises, and eco-tours. Each
              experience is designed to be enjoyable for all ages.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I customize tours?
            </h2>
            <p>
              While our public tours follow a set itinerary, we offer private
              charters that can be tailored to your preferences. You can choose
              the duration, route, and activities for a more personalized
              experience. Contact us for more details on private options.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What should I bring?
            </h2>
            <p>
              We recommend bringing sunscreen, sunglasses, and a hat to protect
              yourself from the sun. Additionally, feel free to bring snacks and
              drinks to enjoy during the tour. Don't forget your camera to
              capture the beautiful moments!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is the capacity?
            </h2>
            <p>
              The Dolphin Quest can accommodate up to 17 passengers for a
              comfortable and intimate experience. This allows for personalized
              interactions with our crew and fellow guests. Book early to secure
              your spot!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I book?
            </h2>
            <p>
              Booking your tour is easy! Simply visit our FareHarbor-integrated
              booking page to view available tours, schedules, and make secure
              reservations. Our user-friendly interface ensures a smooth booking
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
