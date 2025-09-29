"use client";
import { useEffect, useState } from "react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function ComingSoon() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate: Date = new Date("2025-12-31T23:59:59");
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`${interTight.className} w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-cyan-100 to-purple-100 px-6 py-12`}>
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-center gap-10 md:gap-16 items-center">
        
        {/* Countdown Timer */}
        <div className="flex gap-4 md:gap-6">
          <div className="space-y-3">
            <div className="bg-white rounded-2xl shadow-md w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-medium text-blue-950">
                {timeLeft.days}
              </h2>
              <p className="text-gray-500 mt-1 text-xs md:text-sm">Days</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-medium text-blue-950">
                {timeLeft.hours}
              </h2>
              <p className="text-gray-500 mt-1 text-xs md:text-sm">Hours</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-2xl shadow-md w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-medium text-blue-950">
                {timeLeft.minutes}
              </h2>
              <p className="text-gray-500 mt-1 text-xs md:text-sm">Minutes</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-medium text-blue-950">
                {timeLeft.seconds}
              </h2>
              <p className="text-gray-500 mt-1 text-xs md:text-sm">Seconds</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-medium text-blue-950">
            Coming Soon
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            The page you are looking for is currently under construction.
            <br className="hidden md:block" />
            Please enable “Notify Me” to get the latest updates.
          </p>
          <button
            className="mt-6 px-6 md:px-7 py-3 bg-blue-950 text-white rounded-full shadow-md 
             cursor-pointer transition-colors duration-300 hover:bg-blue-500">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
}
