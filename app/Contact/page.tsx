"use client";
import { Inter_Tight } from "next/font/google";
import { FaMapMarkerAlt, FaEnvelope, FaComments, FaPhone } from "react-icons/fa";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ContactPage() {
  return (
    <div className={interTight.className}>
      <div className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-20 text-center">
        <h2 className="text-5xl text-[#13164B] mb-4 font-medium">
          Lets Get In Touch
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
          Ut elit tellus luctus nec <br /> ullamcorper mattis pulvinar dapibus leo
        </p>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className=" p-8 rounded-2xl border border-gray-300 ">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows={5}
                placeholder="Write Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <button className="w-full bg-blue-950 text-white py-4 rounded-full font-semibold hover:bg-blue-500 transition cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl flex flex-col items-start">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-medium text-indigo-900">Our Location</h3>
              <p className="text-gray-600 mt-2">W 13th Parks Suite 559 Denver</p>
            </div>

            <div className="p-6 bg-purple-50 rounded-2xl flex flex-col items-start">
              <div className="bg-purple-500 text-white p-4 rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-medium text-indigo-900">Email Us</h3>
              <p className="text-gray-600 mt-2">nexify@support.com</p>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl flex flex-col items-start">
              <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                <FaComments size={24} />
              </div>
              <h3 className="text-xl font-medium text-indigo-900">Chat With Us</h3>
              <p className="text-gray-600 mt-2">Mon - Fri 09.00 AM - 05.00 PM</p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-2xl flex flex-col items-start">
              <div className="bg-indigo-900 text-white p-4 rounded-full mb-4">
                <FaPhone size={24} />
              </div>
              <h3 className="text-xl font-medium text-indigo-900">Call Us Now</h3>
              <p className="text-gray-600 mt-2">+0 (555) 123 45 67</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
