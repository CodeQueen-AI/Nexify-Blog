"use client";
import { Inter_Tight } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FeaturesSection() {
  return (
    <div>
      <div className={interTight.className}>
        <section className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-16 md:py-26 text-center">
          <h2 className="text-3xl md:text-5xl text-[#13164B] mb-4 font-medium">
            Feature Details
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec <br className="hidden md:block" /> ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </section>
      </div>

      <section
        className={`${interTight.className} bg-white text-[#0A0E27] px-6 md:px-20 py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
          {/* Sidebar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 w-full md:w-72 md:sticky md:top-24 self-start">
            <h2 className="text-xl md:text-2xl font-medium mb-4 text-blue-950">
              Other Features
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Unified Dashboard",
                "Advanced Analytics",
                "Custom edit tool application",
                "Automated Reporting",
                "CRM Integration",
                "Real-Time Notifications",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaArrowRightLong className="w-4 h-4 text-sky-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-4xl font-medium leading-snug text-blue-950">
              Simplify Your Unified Dashboard Process <br className="hidden md:block" /> 
              With Our Intuitive
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Fusce nam rhoncus nunc non a dignissim dolor. Massa nunc ultricies
              posuere felis consequat vulputate fringilla sollicitudin. Ultrices
              sem netus tristique nam malesuada. Platea platea metus ipsum
              maecenas nisl. Consectetur donec parturient fringilla eros
              consectetur sem enim curabitur. Risus dapibus est placerat vivamus
              elementum.
            </p>

            <div className="space-y-5">
              {[
                "Data Ingestion",
                "Analysis",
                "Visualization",
                "Use Cases",
              ].map((title, i) => (
                <div key={i}>
                  <h3 className="text-lg md:text-xl font-medium text-[#0A0E27]">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Ut amet dapibus donec et ante feugiat hac lobortis vivamus.
                    Pretium taciti bibendum; ex torquent dui non suscipit. Class
                    ultrices turpis netus nascetur ex congue. Aenean justo
                    penatibus duis laoreet ut feugiat lorem sagittis.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Image
                src="/Detail.jpg"
                alt="Dashboard Preview"
                width={800}
                height={450}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm md:text-base">
              Aenean bibendum non commodo inceptos, cubilia risus magna. Euismod
              lacus nec fames lorem porttitor. Dictum primis maximus arcu
              scelerisque ante. Condimentum et porta fringilla suscipit
              curabitur sociosqu in. Odio nisl habitasse eleifend arcu quis
              adipiscing orci. Porta magna velit nullam class penatibus
              curabitur ultrices congue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
