"use client"
import { useEffect, useRef } from "react";
import { dmSans } from "../layout";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20 sm:pt-8 md:pt-8 lg:pt-8 ${dmSans.className}`}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-[5rem] left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/videos/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
        {/* Heading */}
        <h1
          className="text-5xl md:text-5xl leading-snug mb-6 max-w-4xl font-semibold"
          style={{ color: "#53b1b8" }}
        >
          Leading{" "}
          <span className="text-white">AI Automation Agency in the USA</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-100 mb-4">
          Build Custom AI Workflows That Save Time Within 21 Days
        </h2>

        {/* Paragraph */}
        <p className="text-md text-gray-400 max-w-5xl mb-28 font-normal">
          You’re likely spending more than you should on manual processes.{" "}
          <span className="text-[#53b1b8] font-medium">CodrionAI</span> builds
          custom AI systems that replace repetitive tasks, fix broken workflows,
          and reduce your team’s workload — helping you save time, minimize
          errors, and cut operating costs. Our automation frameworks are fully
          customized to your business — no cookie-cutter templates, no wasted
          hours, and no extra hires needed.
          <br />
          <br />
          🔹 Built-for-you AI automation, tailored to your operations
          <br />
          🔹 No extra technical setup required from your end
          <br />
          🔹 We identify and automate what’s slowing your growth
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 sm:mt-10">
          {/* Gradient Button */}
          <Link
            href="#contact_us"
            className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl
                        bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44]
                        bg-[length:200%_200%] animate-gradient-flow
                        shadow-[0_0_15px_rgba(83,177,184,0.5)]
                        hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
                        hover:scale-[1.05] transition-all duration-500 ease-out"
          >
            <span className="relative z-10">Book a Free Consultation</span>
          </Link>

          {/* Text Link with Icon */}
          <Link
            href="#ai_automation"
            className="group inline-flex items-center gap-2 text-gray-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:text-[#53b1b8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#53b1b8]"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z" />
            </svg>
            <span className="transition-colors duration-300 group-hover:text-[#53b1b8]">
              Explore Our Solutions
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
