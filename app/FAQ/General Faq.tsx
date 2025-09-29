"use client";
import { useState } from "react";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic"] });

const faqs = [
  {
    question: "What is Nexify, and how can it help my business?",
    answer:
      "Vel metus senectus ullamcorper sollicitudin auctor placerat maximus nec. Curabitur ligula metus platea velit, tellus vulputate enim in tempor. Praesent sollicitudin ac efficitur primis urna. Mollis justo montes ultrices posuere phasellus conubia venenatis",
  },
  {
    question: "Can I integrate Nexify with my existing tools?",
    answer:
      "Vel metus senectus ullamcorper sollicitudin auctor placerat maximus nec. Curabitur ligula metus platea velit, tellus vulputate enim in tempor. Praesent sollicitudin ac efficitur primis urna. Mollis justo montes ultrices posuere phasellus conubia venenatis.",
  },
  {
    question: "What is the difference between the standard and pro plans?",
    answer:
      "Vel metus senectus ullamcorper sollicitudin auctor placerat maximus nec. Curabitur ligula metus platea velit, tellus vulputate enim in tempor. Praesent sollicitudin ac efficitur primis urna. Mollis justo montes ultrices posuere phasellus conubia venenatis.",
  },
  {
    question: "How secure is my data with Nexify?",
    answer:
      "Vel metus senectus ullamcorper sollicitudin auctor placerat maximus nec. Curabitur ligula metus platea velit, tellus vulputate enim in tempor. Praesent sollicitudin ac efficitur primis urna. Mollis justo montes ultrices posuere phasellus conubia venenatis.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-medium text-blue-950 mb-4 ${interTight.className}`}>
          General {" "}
          <span
            className={`${instrumentSerif.className} text-blue-500 italic`}>
            Questions
          </span>
        </h2>
        <p
          className={`text-gray-600 max-w-2xl mx-auto mb-12 ${interTight.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br />
          ullamcorper mattis, pulvinar dapibus leo
        </p>
        <div className="space-y-6 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className={`border rounded-full px-4 py-4 flex items-center cursor-pointer transition-colors
                  ${
                    openIndex === index
                      ? "bg-[#0f1a4f] border-[#0f1a4f] text-white"
                      : "border-gray-300 bg-white text-[#0f1a4f]"
                  }`}
                onClick={() => toggleFAQ(index)}>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white transition-transform mr-4
                    ${openIndex === index ? "rotate-180" : ""}`}>
                  <FaChevronDown />
                </div>
                <div
                  className={`${interTight.className} font-medium text-lg flex-1 text-left`}
                >
                  {faq.question}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}>
                <div
                  className={`px-6 py-4 text-gray-600 ${interTight.className}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
