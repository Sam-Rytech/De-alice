"use client";

import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/Hero-1.jpg",
    headline1: "Mineral Supplier",
    headline2: "Mineral Extraction",
    subtext:
      "Get the best price from us, the largest distributor of minerals in the Middle East region and we always try to send the best purity of materials to our customers",
    info: "Learn More",
  },
  {
    image: "/images/machine.jpg",
    headline1: "Minerals of Iran",
    headline2: "Export of minerals",
    subtext:
      "With a geologically diverse landscape, our region offers access to nearly every mineral found on Earth — a true advantage for global sourcing.",
    info: "Learn More",
  },
  {
    image: "/images/gold-mine.jpg",
    headline1: "Over 5 Years of Global Trade Expertise",
    headline2: "Global Trade",
    subtext:
      "We specialize in the import, export, and supply of mineral materials — backed by over half a decade of hands-on industry experience.",
    info: "Learn more",
  },
];

const page = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="Nav">
        <div>
          <nav>
            <div>
              <p>De Alice</p>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">ABOUT US</a>
                </li>
                <li>
                  <a href="">PROJECTS</a>
                </li>
                <li>
                  <a href="">SERVICES</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>
            </div>
            <div>
              <button type="button">
                <a href="">Get Quote</a>
              </button>
            </div>
          </nav>
        </div>
        <div>
          <div>
            <div className="relative w-full h-[80vh] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.headline1}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                      {slide.headline1}
                    </h2>
                    <p className="text-lg uppercase tracking-wide text-gray-200 mb-2">
                      {slide.headline2}
                    </p>
                    <p className="max-w-2xl text-lg md:text-xl">
                      {slide.subtext}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${
                      current === index ? "bg-white" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Choice">
        <div>
          <div>
            <p>Why Choose US</p>
          </div>
          <div>We Serve the Best Services</div>
        </div>
        <div></div>
      </div>



    </div>
  );
};

export default page;
