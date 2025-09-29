"use client";
import Image from "next/image";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "700"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export default function Features() {
  return (
    <section className="w-full py-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl text-blue-950 font-medium">
        <span className={`${interTight.className}`}>Unleash The Power Of Our</span>{" "}
        <span className={`${instrumentSerif.className} text-[#2A79FF] italic`}>
          SaaS
        </span>
      </h2>

      <p className={`mt-4 text-gray-600 max-w-2xl mx-auto ${interTight.className}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#EEF2FF] rounded-2xl p-6 w-full flex justify-center h-52">
            <Image
              src="/Box1.png"
              alt="Charts"
              width={300}
              height={300}
              className="object-contain"/>
          </div>
          <h3 className={`mt-6 text-2xl font-medium text-blue-950 ${interTight.className}`}>
            Charts And Analysis
          </h3>
          <p className={`mt-2 text-gray-600 text-sm max-w-sm ${interTight.className}`}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Neque efficitur
            viverra commodo scelerisque lobortis.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F2EAFE] rounded-2xl p-6 w-full flex justify-center h-52">
            <Image
              src="/Box2.png"
              alt="Reports"
              width={300}
              height={300}
              className="object-contain"/>
          </div>
          <h3 className={`mt-6 text-2xl font-medium text-blue-950 ${interTight.className}`}>
            Generate Reports With Ease
          </h3>
          <p className={`mt-2 text-gray-600 text-sm max-w-sm ${interTight.className}`}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Neque efficitur
            viverra commodo scelerisque lobortis.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#E9F9E8] rounded-2xl p-6 w-full flex justify-center h-52">
            <Image
              src="/Box3.png"
              alt="Sales"
              width={300}
              height={300}
              className="object-contain"/>
          </div>
          <h3 className={`mt-6 text-2xl font-medium text-blue-950 ${interTight.className}`}>
            Transparent Sales Tracking
          </h3>
          <p className={`mt-2 text-gray-600 text-sm max-w-sm ${interTight.className}`}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Neque efficitur
            viverra commodo scelerisque lobortis.
          </p>
        </div>
      </div>
    </section>
  );
}
