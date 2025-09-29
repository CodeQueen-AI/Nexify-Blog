"use client";
import Image from "next/image";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { useEffect, useState } from "react";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "700"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

function Counter({ end, suffix }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; 
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className={`bg-white py-20 px-6 ${interTight.className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl leading-snug mb-6 font-medium text-blue-950">
            Maximize Your Potential <br /> With Our{" "}
            <span
              className={`${instrumentSerif.className} text-blue-500 italic`}>
              SaaS Suite
            </span>
          </h1>
          <p className="mb-8 text-sm max-w-lg">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Duis eu neque
            dui viverra mus. Feugiat in fusce vehicula condimentum conubia id
            laoreet.
          </p>
          <div className="flex flex-wrap gap-10 mb-10">
            <div>
              <h3 className="text-5xl text-gray-900 font-medium">
                <Counter end={30} suffix=" K" />
                <span className="text-blue-500 align-super text-xl">+</span>
              </h3>
              <p className="text-gray-500">Worldwide client</p>
            </div>
            <div>
              <h3 className="text-5xl text-gray-900 font-medium">
                <Counter end={30} />
                <span className="text-blue-500 align-super text-xl">+</span>
              </h3>
              <p className="text-gray-500">Best Features</p>
            </div>
            <div>
              <h3 className="text-5xl text-gray-900 font-medium">
                <Counter end={99} />
                <span className="text-blue-500 align-super text-xl">+</span>
              </h3>
              <p className="text-gray-500">Trusted Company</p>
            </div>
          </div>
          <button
            className="bg-[#0f1a4f] text-white px-8 py-3 rounded-full font-medium shadow-md 
            hover:bg-sky-500 hover:scale-95 transform transition duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="bg-purple-100 p-6 rounded-2xl shadow-md">
            <Image
              src="/Page2.jpg"
              alt="Dashboard Preview"
              width={500}
              height={350}
              className="rounded-lg object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}
