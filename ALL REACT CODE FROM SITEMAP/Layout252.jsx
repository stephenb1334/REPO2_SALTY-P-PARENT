"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout252() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Discover Our Exclusive Private Tours for Unforgettable
              Experiences.
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Experience the beauty of the waters of Southwest Florida with our
              private tours designed for you. Whether you're seeking a serene
              sunset cruise or an adventurous dolphin watching trip, we have the
              perfect option. Customize your journey to create lasting memories
              with family and friends.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Sunsets & Dolphins Tour on the Pelly-Can, a six-seater vessel
            </h3>
            <p>
              Witness breathtaking sunsets while watching playful dolphins in
              their natural habitat.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Private Charter on our six-seater vesel called th Pelly-Can
            </h3>
            <p>
              Enjoy a fully customizable charter experience tailored to your
              group's desires.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Sunsets & Dolphins Tour on the Pelly-Can, our six-seater vessel
            </h3>
            <p>
              Join us for an unforgettable evening filled with nature's beauty
              and excitement.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
