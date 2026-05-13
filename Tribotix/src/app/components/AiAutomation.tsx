"use client";

import { motion } from "framer-motion";
import React from "react";
import { Bot, Workflow, Handshake } from "lucide-react";
import Link from "next/link";
import { dmSans } from "../layout";

const AiAutomation: React.FC = () => {
  return (
    <div
      id="ai_automation"
      className="min-h-screen bg-white text-gray-900 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left Side - Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full text-center md:text-left space-y-4"
      >
        <p className="text-sm sm:text-base font-semibold text-gray-500">
          AI-Powered Business Automation
        </p>

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight ${dmSans.className}`}
        >
          Intelligent Systems That Scale Your Business 24/7
        </h2>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify md:pr-4">
          Transform how your business operates with smart automation and AI-driven
          systems that adapt, learn, and scale with you. At{" "}
          <span className="text-[#53b1b8] font-semibold">CodrionAI</span>, we
          specialize in building end-to-end intelligent workflows — from{" "}
          <span className="font-semibold text-[#53b1b8]">
            RAG-based AI assistants
          </span>{" "}
          and voice-powered agents to custom{" "}
          <span className="font-semibold text-[#53b1b8]">SaaS automation tools</span>.
          Our solutions optimize time, enhance productivity, and streamline your
          operations. Whether automating client onboarding, lead generation, or
          internal processes, we craft systems that work even while you sleep —
          ensuring your business stays ahead, effortlessly.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="#contact_us"
            className="hidden md:inline-flex relative items-center justify-center px-8 py-3 text-white font-semibold rounded-xl
             bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44]
             bg-[length:200%_200%] animate-gradient-flow
             shadow-[0_0_15px_rgba(83,177,184,0.5)]
             hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
             hover:scale-[1.05] transition-all duration-500 ease-out"
          >
            <span className="relative z-10">Schedule a Free Consultation</span>
            <span className="absolute inset-0 rounded-xl border border-white/20"></span>
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#53b1b8]/20 to-[#021b2a]/20 blur-md transition-opacity duration-500"></span>
          </Link>
        </div>
      </motion.div>

      {/* Right Side - Automation Features */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 w-full flex flex-col gap-6"
      >
        {/* Feature Item */}
        {[
          {
            Icon: Workflow,
            title: "AI-Driven Workflow Automation",
            desc: "CodrionAI designs intelligent automation pipelines that integrate seamlessly with your CRMs, emails, and databases — eliminating manual tasks, increasing accuracy, and accelerating business outcomes.",
          },
          {
            Icon: Bot,
            title: "Conversational Chatbots & Voice Agents",
            desc: "Deploy AI-powered chatbots and voice agents that provide 24/7 customer engagement, automate inquiries, and deliver personalized experiences — powered by advanced NLP and speech technologies.",
          },
          {
            Icon: Handshake,
            title: "Sales & Support Agents That Convert",
            desc: "Our AI agents handle outreach, qualify leads, follow up on prospects, and close deals — all while syncing data with your CRMs and marketing platforms in real time to maximize conversions.",
          },
        ].map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="group p-5 sm:p-6 rounded-2xl border-2 border-gray-200 bg-white hover:bg-[#f0fafa] hover:border-[#53b1b8] hover:shadow-xl transition-all duration-300 flex items-start gap-4"
          >
            <div className="bg-[#53b1b8]/10 p-4 rounded-full group-hover:bg-[#53b1b8] transition-colors duration-300 flex-shrink-0">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#53b1b8] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#053b44] mb-1 group-hover:text-[#53b1b8] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AiAutomation;
