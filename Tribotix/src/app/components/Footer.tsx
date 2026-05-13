"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { dmSans } from "../layout";

const faqs = [
  {
    question: "What makes CodrionAI different?",
    answer:
      "Our strength lies in deep AI expertise — from automation to RAG-driven workflows. Every solution is built for accuracy, scalability, and measurable impact.",
  },
  {
    question: "How quickly can we start a project?",
    answer:
      "Usually within 48 hours of the initial discovery session. We move fast, keeping quality and innovation at the core of delivery.",
  },
  {
    question: "Do you offer maintenance and optimization?",
    answer:
      "Yes. We provide continuous monitoring, retraining, and optimization for AI systems to ensure lasting performance and value.",
  },
  {
    question: "What types of industries do you serve?",
    answer:
      "We work with startups, enterprises, and agencies across industries like SaaS, logistics, healthcare, education, and e-commerce — wherever AI automation adds value.",
  },
  {
    question: "Can CodrionAI integrate with my current systems?",
    answer:
      "Absolutely. We integrate seamlessly with CRMs, APIs, and data platforms — from HubSpot and Zoho to Airtable, Slack, and custom-built dashboards.",
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQs Section */}
      <section
        className={`w-full bg-[#053b44] text-white py-24 px-6 md:px-16 lg:px-24 ${dmSans.className}`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-sm uppercase font-semibold tracking-wider text-[#53b1b8]">
              FAQs
            </h3>
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Explore CodrionAI’s FAQ hub to learn how our automation experts
              build intelligent workflows, RAG-based agents, and scalable AI
              products tailored to your goals.
            </p>
          </motion.div>

          {/* Right Section (Accordion) */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 cursor-pointer transition-all duration-300 hover:border-[#53b1b8]"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white hover:text-[#53b1b8] transition-colors duration-300">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-[#53b1b8] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-300 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 w-full h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#53b1b8] to-transparent"></div>
        </div>
      </section>

      <section className="w-full bg-[#053b44] text-gray-300 py-10 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 text-center md:text-left">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo */}
            <div className="relative w-32 sm:w-40 flex items-center justify-center md:justify-start">
              <Image
                src="/images/logo1.png"
                alt="CodrionAI Logo"
                width={160}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-[12rem] text-center md:text-justify">
              At CodrionAI, we design automation systems that think, adapt, and
              scale. From AI agents to RAG pipelines — we transform your
              workflows into intelligent, data-driven engines of growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              {[
                "AI Workflow Automation",
                "Custom SaaS Development",
                "RAG & Agentic Systems",
                "Voice & Chat Agents",
                "Data Integration Solutions",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-[#53b1b8] transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              {[
                "Home",
                "Solutions",
                "About CodrionAI",
                "Contact Us",
                "Join Our Team",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-[#53b1b8] transition-colors duration-300 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Get In Touch!
            </h4>
            <ul className="space-y-1 text-sm sm:text-base text-gray-400">
              <li className="hover:text-[#53b1b8] transition-colors duration-300">
                📞 Phone: (+1) 786 9520-251
              </li>
              <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
                💬 WhatsApp: (+92) 327-1080-439
              </li>
              <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
                ✉️ Email: contact@codrionai.com
              </li>
              <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
                📍 Lahore, Pakistan – 55050
              </li>
              <li className="hover:text-[#53b1b8] text-sm transition-colors duration-300">
                📍 Miami, Florida (FL), 33162, United States
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="relative mt-10 w-full h-[1px] overflow-hidden bg-gradient-to-r from-transparent via-[#53b1b8] to-transparent opacity-60"></div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-400">
          © 2025{" "}
          <span className="text-[#53b1b8] font-semibold">CodrionAI</span> Pvt.
          Ltd. All rights reserved.
        </div>
      </section>
    </>
  );
}
