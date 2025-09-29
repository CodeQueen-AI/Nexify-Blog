"use client";
import Image from "next/image";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="w-full bg-gradient-to-r from-[#E9FBFF] to-[#DBFFF9] py-16 sm:py-20 text-center px-4">
        <div className="flex justify-center -mt-6 sm:-mt-10">
          <span className="bg-transparent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-300">
            🎉 New update! Get our latest insights.
          </span>
        </div>
        <h1
          className={`mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-blue-950 leading-snug sm:leading-tight ${interTight.className}`}>
          <span className="font-medium">
            #1 SaaS Solution To Manage <br className="hidden sm:block" /> Your
          </span>{" "}
          <span
            className={`text-[#2A79FF] italic block sm:inline ${instrumentSerif.className}`}>
            Sales And Analytics
          </span>
        </h1>
        <p
          className={`mt-5 sm:mt-6 text-lg sm:text-sm md:text-base text-gray-600 max-w-2xl md:max-w-3xl mx-auto ${interTight.className}`}
        >
          Maximize Your Business’s Potential: Unleash Strategic Innovations{" "}
          <br className="hidden md:block" />
          And Growth Strategies To Propel Your Success Beyond Limits.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            className={`bg-[#13164B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all 
              duration-300 transform hover:bg-sky-400 hover:scale-95 cursor-pointer ${interTight.className}`}
          >
            Get Started
          </button>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2 sm:-space-x-3">
              <Image
                src="/User1.jpg"
                alt="Client 1"
                width={45}
                height={45}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/User2.jpg"
                alt="Client 2"
                width={45}
                height={45}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/User3.jpg"
                alt="Client 3"
                width={45}
                height={45}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/User4.jpg"
                alt="Client 4"
                width={45}
                height={45}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p
              className={`text-gray-600 text-sm sm:text-base text-left ${interTight.className}`}
            >
              ⭐⭐⭐⭐⭐ <br />
              From 1200+ Clients
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#E9FBFF] to-[#DBFFF9]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0C154D]"></div>
        <div className="relative flex items-center justify-center w-full h-full px-4">
          <Image
            src="/Home Img.png"
            alt="Dashboard Preview"
            width={1200}
            height={700}
            className="w-full max-w-6xl h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </section>
    </main>
  );
}
