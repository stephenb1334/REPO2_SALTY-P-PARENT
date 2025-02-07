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
            Find answers to your questions about our tours, booking process, and
            what to expect.
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
              What types of tours?
            </h2>
            <p>
              We offer a variety of tours including dolphin watching, sunset
              cruises, and private charters. Each tour is designed to provide a
              unique experience on the water. Join us for an unforgettable
              adventure!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I book?
            </h2>
            <p>
              Booking is easy through our user-friendly online system. Simply
              select your desired tour, choose a date, and complete your payment
              securely. You’ll receive a confirmation email shortly after.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What should I bring?
            </h2>
            <p>
              We recommend bringing sunscreen, a hat, and sunglasses for sun
              protection. Additionally, feel free to bring snacks and drinks to
              enjoy during your tour. Don’t forget your camera to capture the
              memories!
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are the tours family-friendly?
            </h2>
            <p>
              Absolutely! Our tours are designed to be enjoyable for guests of
              all ages. We prioritize safety and fun, making it a perfect outing
              for families.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if it rains?
            </h2>
            <p>
              In the event of rain, we monitor weather conditions closely. If
              necessary, we may reschedule your tour for safety. Our team will
              keep you informed and assist with any changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
