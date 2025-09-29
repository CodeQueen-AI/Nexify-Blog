"use client";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

export default function Hero() {
  return (
    <section
      className={`flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 rounded-2xl 
      bg-gradient-to-r from-blue-500 via-teal-300 to-purple-500 ${interTight.className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-medium leading-snug max-w-3xl">
        4,000<sup className="text-blue-200 text-base">+</sup> Startups Growing With{" "}
        <span className={`${instrumentSerif.className} italic text-white`}>Nexify</span>
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 text-gray-900 font-medium">
        <span className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-purple-700 text-lg sm:text-xl">✔</span> 30-day free trial
        </span>
        <span className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-purple-700 text-lg sm:text-xl">✔</span> Personalized onboarding
        </span>
        <span className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-purple-700 text-lg sm:text-xl">✔</span> Access to all features
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4">
        <button
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg 
          cursor-pointer transform transition-all duration-300 hover:scale-95 hover:bg-black">
          Learn More
        </button>
        <button
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#111A3A] text-white font-semibold shadow-lg 
          cursor-pointer transform transition-all duration-300 hover:scale-95 hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
}
