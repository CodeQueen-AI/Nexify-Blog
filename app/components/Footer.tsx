import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";
import { Check } from "lucide-react";
import { Inter_Tight } from "next/font/google";
import { GrLocationPin } from "react-icons/gr";
import { FaRegPaperPlane } from "react-icons/fa";
import Image from "next/image";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`bg-[#161C52] text-gray-300 ${interTight.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="text-center md:text-left">
          <Image src="/Footer logo.png" alt="Nexify Logo"width={50} height={50} className="w-42 mb-4 mx-auto md:mx-0" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit 
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col sm:flex-row mt-5 items-center gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-6 py-3 rounded-lg bg-[#1c2255] text-gray-200 placeholder-gray-600 focus:outline-none w-full sm:w-[300px] md:w-[250px] lg:w-[200px]"
            />
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition">
              <FaRegPaperPlane className="text-lg" />
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-medium mb-6 text-white">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <GrLocationPin className="text-blue-400 mt-1 text-2xl" />
              <span>
                Callison Laney Buoy Building W <br /> 13th Parks Suite 559, Denver
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-blue-400" /> quicklogic@support.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Check className="text-blue-400" /> +0 (555) 123 45 67
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-medium mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-medium mb-6 text-white">Follow Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebookF className="text-blue-600"/> Facebook
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaInstagram className="text-blue-600"/> Instagram
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaTwitter className="text-blue-600"/> Twitter
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaYoutube className="text-blue-600"/> Youtube
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#31376B] text-gray-200 text-sm py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>
            © 2025 All Rights Reserved by SaaS & Tech Startup | Developed By The Quick Logic
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
