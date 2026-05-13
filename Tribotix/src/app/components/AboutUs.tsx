"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dmSans } from "../layout";
const AboutUs: React.FC = () => {
  return (
    <div id="about_us">
      {/* --- WHO WE ARE SECTION --- */}
      <div
        className={`bg-white text-gray-900 
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 
          py-12 sm:py-16 md:py-20 lg:py-28 
          flex flex-col md:flex-row items-center justify-center gap-10
          ${dmSans.className}`}
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/who_we_are.jpg"
              alt="AI automation and digital transformation team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <p className="text-sm sm:text-base md:text-[13px] font-semibold text-gray-500">
            Who We Are?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Ideas Evolve — We Engineer Their Intelligence.
          </h2>
          <p className="text-gray-600 sm:text-base md:text-[16px] leading-relaxed text-justify max-w-[32rem] mx-auto md:mx-0">
            At{" "}
            <span className="text-[#53b1b8] font-semibold">CodrionAI</span>, we
            transform how modern businesses grow by building intelligent systems
            that think, adapt, and scale. Our team combines world-class experts
            in{" "}
            <span className="font-semibold text-[#53b1b8]">
              AI automation, RAG agents, SaaS development, and voice-driven
              solutions
            </span>{" "}
            to create technology that works for you — not the other way around.
            Founded with the vision to simplify digital transformation, we help
            startups and enterprises automate operations, personalize customer
            experiences, and accelerate business outcomes through{" "}
            <span className="font-semibold text-[#53b1b8]">
              intelligent automation and full-stack innovation.
            </span>{" "}
            At CodrionAI, we don’t just deliver products —{" "}
            <span className="font-semibold text-[#53b1b8]">
              we engineer scalable growth systems.
            </span>
          </p>
        </motion.div>
      </div>

      {/* --- WHAT WE DO SECTION --- */}
      <div
        className={`bg-white text-gray-900 
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 
          py-12 sm:py-16 md:py-20 lg:py-28 
          flex flex-col md:flex-row items-center justify-center gap-10
          ${dmSans.className}`}
      >
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <p className="text-sm sm:text-base md:text-[13px] font-semibold text-gray-500">
            What We Do?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Smart Automation. Real Impact.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-relaxed text-justify max-w-[32rem] mx-auto md:mx-0">
            We design and deploy{" "}
            <span className="font-semibold text-[#53b1b8]">
              intelligent automation ecosystems
            </span>{" "}
            that merge creativity, data, and AI into seamless workflows. Our
            solutions empower businesses to move faster, operate smarter, and
            scale sustainably. Whether you need a{" "}
            <span className="font-semibold text-[#53b1b8]">
              custom SaaS platform
            </span>
            ,{" "}
            <span className="font-semibold text-[#53b1b8]">
              agentic AI chatbot
            </span>
            , or{" "}
            <span className="font-semibold text-[#53b1b8]">
              end-to-end CRM automation
            </span>
            , we tailor every system around your processes — not the other way
            around. From backend logic to voice-enabled sales agents, our
            technology turns manual tasks into autonomous, growth-driven
            operations built for the future.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/what_we_do.jpg"
              alt="AI automation and workflow optimization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutUs;
