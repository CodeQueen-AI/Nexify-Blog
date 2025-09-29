"use client";
import { Inter_Tight } from "next/font/google";
import General from './General Faq'
import Popular from './Popular Faq'
import Box from '../About/Box'

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesSection() {
  return (
    <div>
    <div className={interTight.className}>
      <section className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-26 text-center">
        <h2 className="text-5xl text-[#13164B] mb-4 font-medium">
          FAQ
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </section>
    </div>
    <General/>
    <Popular/>
    <Box/>
    </div>
  );
}
