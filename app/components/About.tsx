"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function AboutPage() {
  return (
    <section
      className={`${interTight.className} bg-gradient-to-r from-blue-50 via-green-100 to-purple-50  py-20 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-20 self-start h-fit">
        <h2 className={`text-4xl md:text-5xl font-medium text-blue-950 leading-snug`}>
           What People Who <br /> Work With Us Think {" "}
          <br />
          <span
      className={`${instrumentSerif.className} text-blue-500 italic`}>
      About Us?
    </span>
  </h2>
  <p className="text-gray-600 mt-4 max-w-lg">
    Lorem ipsum odor amet, consectetur adipiscing elit. Duis eu neque
    dui viverra mus. Feugiat in fusce vehicula
  </p>
  <div className="flex items-center gap-2 mt-6 text-yellow-500">
    <div className="flex">
      <Star className="w-5 h-5 fill-yellow-500" />
      <Star className="w-5 h-5 fill-yellow-500" />
      <Star className="w-5 h-5 fill-yellow-500" />
      <Star className="w-5 h-5 fill-yellow-500" />
      <Star className="w-5 h-5 fill-yellow-500" />
    </div>
    <span className="text-gray-700 font-medium">
      ( 2,420 Average rating )
    </span>
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 px-5">
            <p className="text-gray-700 mb-4">
              With nexify, we&apos;ve revolutionized our customer relationship
              management. The CRM&apos;s automation features and intuitive
              interface have not only increased our sales team&apos;s efficiency
              but also improved customer retention by 25%.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user5.jpg"
                alt="David Chen"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">David Chen</h4>
                <p className="text-sm text-gray-500">
                  Sales Director at ConnectCo
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 px-5">
            <p className="text-gray-700 mb-4">
              Integrating nexify into our workflow was seamless. The actionable
              insights from their business intelligence platform have empowered
              our team to make smarter, data-driven decisions every day.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user6.jpg"
                alt="Laura Evans"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">Laura Evans</h4>
                <p className="text-sm text-gray-500">
                  VP of Operations at DataDriven
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6  px-5">
            <p className="text-gray-700 mb-4">
              &quot;The AI capabilities of Nexify are impressive. Their
              technology has allowed us to identify trends and patterns in our
              data that we never would have spotted otherwise, leading to a 30%
              increase in our operational efficiency.&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user7.jpg"
                alt="Anna Rodriguez"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">Anna Rodriguez</h4>
                <p className="text-sm text-gray-500">Chief Data at InnovateTech</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6  px-5">
            <p className="text-gray-700 mb-4">
              &quot;nexify has transformed the way our team collaborates. The
              platform’s real-time communication tools and project management
              features have significantly reduced our project.&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user8.jpg"
                alt="Tom Williams"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">Tom Williams</h4>
                <p className="text-sm text-gray-500">Project Lead at TeamSync</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-2xl p-6  px-5">
            <p className="text-gray-700 mb-4">
              &quot;nexify has transformed the way our team collaborates. The
              platform’s real-time communication tools and project management
              features have significantly reduced our project.&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user9.jpg"
                alt="Tom Williams"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">Tom Williams</h4>
                <p className="text-sm text-gray-500">Project Lead at TeamSync</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-2xl p-6  px-5">
            <p className="text-gray-700 mb-4">
              &quot;nexify has transformed the way our team collaborates. The
              platform’s real-time communication tools and project management
              features have significantly reduced our project.&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/user10.jpg"
                alt="Tom Williams"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-blue-950">Tom Williams</h4>
                <p className="text-sm text-gray-500">Project Lead at TeamSync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

































