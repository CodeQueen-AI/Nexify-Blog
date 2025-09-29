"use client";
import { Inter_Tight } from "next/font/google";
import Story from './Story'
import People from './People'
import Box from './Box'

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function About() {
  return (
    <div>
      <section className={`w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-26 text-center ${interTight.className}`}>
        <h2 className="text-5xl text-blue-950 font-medium mb-4">
          About
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Ut elit tellus luctus nec <br /> ullamcorper mattis pulvinar dapibus leo
        </p>
      </section>
      <Story/>
      <People/>
      <Box/>
    </div>
  );
}
