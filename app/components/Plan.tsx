"use client";
import { Check, X } from "lucide-react";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

export default function PricingSection() {
  return (
    <section className={`${interTight.className} bg-white py-20 px-6 md:px-12`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium text-blue-950">
          Choose Your Plan: <br />
          Flexible
          <br />
          <span className={`${instrumentSerif.className} text-blue-500 italic`}>
            Pricing Options
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
        {/* Personal Plan */}
        <div className="relative z-0 bg-white rounded-3xl shadow-md border border-gray-200 p-8 text-left hover:shadow-xl transition">
          <h3 className="text-xl font-medium text-blue-950">Personal</h3>
          <p className="text-4xl font-medium text-blue-950 mt-4">
            $29.9 <span className="text-lg font-normal text-gray-700">/Month</span>
          </p>
          <p className="text-gray-600 mt-4">
            Velit maximus habitasse himenaeos iaculis, dapibus justo orci neque
            conubia. Duis
          </p>

          <h4 className="font-semibold text-gray-900 mt-6">Including:</h4>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5"/> Basic feature set
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Limited usage or access
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Access to advanced tools
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <X className="w-5 h-5" /> Email and chat support
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <X className="w-5 h-5" /> 24x7 customer service
            </li>
          </ul>
          <button
          className="mt-8 w-full bg-[#1a1a40] text-white py-3 rounded-full font-medium 
          cursor-pointer transition-transform transform hover:scale-95 hover:bg-sky-500 active:scale-90">
          Select Plan
        </button>
        </div>

        {/* Pro Plan */}
        <div className="relative z-10 rounded-3xl shadow-md border border-gray-200 overflow-hidden transform scale-105">
          <div className="bg-gradient-to-tr from-green-100 via-purple-100 to-blue-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <span className="absolute top-6 right-6 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Popular
            </span>
            <p className="text-4xl font-medium text-blue-950 mt-4">
              $59.9 <span className="text-lg font-normal text-gray-700">/Month</span>
            </p>
            <p className="text-gray-600 mt-4">
              Velit maximus habitasse himenaeos iaculis, dapibus justo orci neque
              conubia. Duis
            </p>
          </div>
          <div className="bg-white p-8">
            <h4 className="font-semibold text-gray-900 mt-2">Including:</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-blue-600  w-5 h-5" /> Comprehensive feature set
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-600 w-5 h-5" /> Expanded usage limits
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-600 w-5 h-5" /> Access to advanced tools
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-blue-600 w-5 h-5" /> Email and chat support
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <X className="w-5 h-5" /> 24x7 customer service
              </li>
            </ul>
            <button
            className="mt-8 w-full bg-[#1a1a40] text-white py-3 rounded-full font-medium 
            cursor-pointer transition-transform transform hover:scale-95 hover:bg-sky-500 active:scale-90">
            Select Plan
              </button>
            </div>
        </div>

        {/* Business Plan */}
        <div className="relative z-0 bg-white rounded-3xl shadow-md border border-gray-200 p-8 text-left hover:shadow-xl transition">
          <h3 className="text-xl font-medium text-blue-950">Business</h3>
          <p className="text-4xl font-medium text-blue-950 mt-4">
            $129.9 <span className="text-lg font-normal text-gray-700">/Month</span>
          </p>
          <p className="text-gray-600 mt-4">
            Velit maximus habitasse himenaeos iaculis, dapibus justo orci neque
            conubia. Duis
          </p>
          <h4 className="font-semibold text-gray-900 mt-6">Including:</h4>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Fully customizable feature set
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Dedicated account management
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Scalable pricing options
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> Email and chat support
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-blue-600 w-5 h-5" /> 24x7 customer service
            </li>
          </ul>
          <button className="mt-8 w-full bg-[#1a1a40] text-white py-3 rounded-full font-medium cursor-pointer
           transition-transform transform hover:scale-95 hover:bg-sky-500 active:scale-90">
                Select Plan
          </button>
        </div>
      </div>
    </section>
  );
}
