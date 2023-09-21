"use client";
import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
  const handlescroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-28 padding-x">
        <h1 className="hero__title">
          Find, Book & Rent a Car — Quickly, Easily & Efficianely
        </h1>
        <p className="hero__Subtitle">
          Need a rental car? Streamline your car rental experience with our
          effortless booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-500 hover:bg-blue-700 text-white rounded-full mt-10"
          handleClick={handlescroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
          <div className="hero__image-overlay" />
        </div>
    </div>
  );
};

export default Hero;
