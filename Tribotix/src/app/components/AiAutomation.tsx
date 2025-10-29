"use client";

import { motion } from "framer-motion";
import React from "react";
import { Bot, Workflow, Handshake } from "lucide-react";
import Link from "next/link";
import { dmSans } from "../layout";
const AiAutomation: React.FC = () => {
  return (
    <div id="ai_automation" className="min-h-screen bg-white text-gray-900 px-6 sm:px-8 md:px-16 lg:px-32 xlg:px-64 py-20 flex flex-col md:flex-row items-start justify-center gap-16 ">
      {/* Left Side - Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <p className="text-sm sm:text-base md:text-[15px] font-semibold text-gray-500 mb-4">AI-Powered Automation</p>

        <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 w-[27rem] ${dmSans.className}`}>
          Build Systems That Work While You Sleep
        </h2>

        <p className="text-gray-700 text-md leading-relaxed mb-8 w-[25rem] text-justify">
          Unlock the next level of business efficiency with tailored automation
          solutions that adapt to your operations. At{" "}
          <span className="text-[#53b1b8] font-semibold">Tribotex</span>, we
          don’t just automate tasks — we reimagine how your business runs. From
          building intelligent workflows on top of your existing platforms to
          deploying AI chatbots and voice-powered sales agents, we help you cut
          costs, speed up processes, and create scalable systems that work
          around the clock. Whether you’re looking to reduce manual workload,
          boost conversions, or deliver seamless support, our solutions are
          engineered to fit your tools, your team, your goals — and grow with
          your business.
        </p>

        <Link
          href="#contact_us"
          className="relative inline-flex items-center justify-center px-8 py-3 text-white font-semibold rounded-xl 
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out"
        >
          <span className="relative z-10">Book a Free Demo</span>
          <span className="absolute inset-0 rounded-xl border border-white/20"></span>
          <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#0ba5ec]/20 blur-md transition-opacity duration-500"></span>
        </Link>
      </motion.div>

      {/* Right Side - Automation Features */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-[45rem] flex flex-col gap-8"
      >
        {/* Feature 1 */}
        <div className="group p-5  rounded-2xl border-2 border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-2xl transition-all duration-300 flex gap-5 items-start">
          {/* Icon Section */}
          <div className="bg-[#53b1b8]/10 p-4 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
            <Workflow className="w-7 h-7 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#053b44] mb-2 group-hover:text-[#53b1b8] transition-colors duration-300">
              Custom Business Automation Pipelines
            </h3>
            <p className="text-gray-600 text-[14px] leading-relaxed text-justify">
              We build intelligent automation pipelines on top of your existing
              tech stack — CRMs, forms, emails, and more — saving hours of
              repetitive tasks and boosting operational efficiency without
              disruption.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="group p-5 rounded-2xl border-2 border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-2xl transition-all duration-300 flex gap-5 items-start">
          {/* Icon Section */}
          <div className="bg-[#53b1b8]/10 p-4 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
            <Bot className="w-7 h-7 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#053b44] mb-2 group-hover:text-[#53b1b8] transition-colors duration-300">
              AI Chatbots For 24/7 Engagement
            </h3>
            <p className="text-gray-600 text-[14px] leading-relaxed text-justify">
              Deploy smart, conversational AI chatbots that handle support, lead
              qualification, and FAQs — fully customized to your brand tone,
              tools, and audience behavior across web, social, or messaging
              apps.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group p-5 rounded-2xl border-2 border-gray-300 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-2xl transition-all duration-300 flex gap-5 items-start">
          {/* Icon Section */}
          <div className="bg-[#53b1b8]/10 p-4 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300">
            <Handshake className="w-7 h-7 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#053b44] mb-2 group-hover:text-[#53b1b8] transition-colors duration-300">
              AI-Powered Agents That Close Deals
            </h3>
            <p className="text-gray-600 sm:text-base md:text-[14px] leading-relaxed text-justify">
              From cold outreach to handling incoming inquiries, our AI Sales
              Agents handle calls like real sales reps — following scripts,
              answering objections, and updating CRMs, all in real time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AiAutomation;
