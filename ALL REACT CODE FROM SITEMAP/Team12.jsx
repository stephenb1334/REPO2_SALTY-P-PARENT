"use client";

import React from "react";

export function Team12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Say "Hi!" Meet Your Captain & First Mate
            </h2>
            <p className="md:text-md">
              "We're dedicated to the marine life. This is our home and we're
              passionate about sharing it."
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Captain Rob</h5>
              <h6 className="md:text-md">Lead Captain</h6>
            </div>
            <p>
              With years of experience, he knows the waters like the back of his
              hand.
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="relative mb-5 size-full overflow-hidden md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Captain Emily
              </h5>
              <h6 className="md:text-md">Tour Guide</h6>
            </div>
            <p>
              Captain Emily brings enthusiasm and a love for marine life to
              every tour.
            </p>
          </div>
        </div>
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="mx-auto flex max-w-md flex-col items-center">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              "Once you depart from our tours, you're friends for life" -
              Captain Rob
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
