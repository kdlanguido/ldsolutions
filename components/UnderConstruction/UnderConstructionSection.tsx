"use client";
import Head from "next/head";
import { useState, useEffect } from "react";

const UnderConstructionPage = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("December 31, 2025 23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Under Construction</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-4 font-mono">
        <style jsx>{`
          @keyframes neonGlow {
            from {
              text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00f,
                0 0 20px #00f, 0 0 25px #00f, 0 0 30px #00f, 0 0 35px #00f;
            }
            to {
              text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00f,
                0 0 40px #00f, 0 0 50px #00f, 0 0 60px #00f, 0 0 70px #00f;
            }
          }
          .neon-text {
            animation: neonGlow 1.5s ease-in-out infinite alternate;
          }
        `}</style>

        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold neon-text mb-4">
            <span className="text-blue-400">Project</span>
            <span className="text-purple-400">Lazy Devs</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            Have some Coffee first, We are trying to do this as fast as we can.
            <br />
            <span className="text-purple-400 neon-text">We are lazy tho</span>
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-extrabold text-blue-400 p-2 border-2 border-blue-400 rounded-lg">
                  {String(value).padStart(2, "0")}
                </div>
                <span className="text-xs md:text-sm text-gray-500 mt-1 uppercase">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-full h-2 w-64 md:w-96 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 h-full animate-pulse"></div>
          </div>

          <p className="text-sm md:text-base text-gray-500">
            For updates, follow us on our social channels or check back soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
