"use client";

import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaLaptopCode, FaChartLine, FaPaintBrush, FaSyncAlt } from "react-icons/fa";
import { dmSans } from "../layout";

export default function Services() {
  const services = [
    {
      title: "AI Automation & RAG Systems",
      icon: <FaSyncAlt className="text-4xl text-[#53b1b8]" />,
      description:
        "Transform manual workflows into intelligent, RAG-powered automation pipelines. We design end-to-end AI systems that integrate data retrieval, reasoning, and generation to streamline your business processes.",
      list: [
        "Custom AI Workflow Automation",
        "Retrieval-Augmented Generation (RAG) Systems",
        "Agentic AI Integration & Orchestration",
        "Automated Document & Data Processing",
        "Business Process Optimization",
      ],
    },
    {
      title: "SaaS Platforms & Cloud Solutions",
      icon: <FaCogs className="text-4xl text-[#53b1b8]" />,
      description:
        "From concept to deployment, we build secure, scalable SaaS products powered by AI and automation. Every product is engineered for performance, cloud scalability, and data-driven intelligence.",
      list: [
        "AI-Enhanced SaaS Product Development",
        "Cloud-Native Infrastructure Setup",
        "API Development & Integration",
        "Secure Authentication & Data Management",
        "Continuous Optimization & DevOps Automation",
      ],
    },
    {
      title: "Intelligent Agents & Voice Bots",
      icon: <FaRobot className="text-4xl text-[#53b1b8]" />,
      description:
        "Empower your business with AI-powered chatbots and voice agents that understand, respond, and act in real time. We craft custom conversational and autonomous AI agents built for engagement and conversion.",
      list: [
        "AI Chatbots for Web & CRM",
        "Voice Agents & Call Automation",
        "LLM-Powered Customer Support Systems",
        "AI Sales & Outreach Assistants",
        "Natural Language Understanding (NLU) Integration",
      ],
    },
    {
      title: "Business Process Automation",
      icon: <FaChartLine className="text-4xl text-[#53b1b8]" />,
      description:
        "Eliminate inefficiencies and scale your operations with tailored automation workflows. Our systems connect apps, teams, and data into a unified AI-driven ecosystem that saves hours daily.",
      list: [
        "Workflow Automation & Integration",
        "CRM & ERP Automation Pipelines",
        "AI-Powered Reporting Dashboards",
        "Email, Lead & Task Automation",
        "Operational Intelligence Tracking",
      ],
    },
    {
      title: "Data Science & Analytics",
      icon: <FaLaptopCode className="text-4xl text-[#53b1b8]" />,
      description:
        "Turn data into strategic advantage with predictive insights and AI analytics. We build pipelines that collect, process, and visualize business data for better decisions and smarter growth.",
      list: [
        "Predictive & Prescriptive Analytics",
        "Custom Machine Learning Models",
        "Real-Time Data Visualization Dashboards",
        "AI-Powered Forecasting Tools",
        "Big Data Pipeline Engineering",
      ],
    },
    {
      title: "Design & Brand Experience",
      icon: <FaPaintBrush className="text-4xl text-[#53b1b8]" />,
      description:
        "Design that inspires action. We create digital experiences and brand identities that merge usability with innovation, ensuring every interaction reflects your AI-first vision.",
      list: [
        "AI-Driven UI/UX Design",
        "Product Interface Optimization",
        "Brand Identity & Visual Systems",
        "Interactive Prototypes & Mockups",
        "Conversion-Centered Creative Assets",
      ],
    },
  ];

  return (
 <div
  id="services"
  className={`min-h-screen bg-[#053b44] text-gray-100 
    px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 
    py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 
    flex flex-col items-center justify-center
    ${dmSans.className}`}
>
  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 sm:mb-16 md:mb-20 w-full max-w-5xl"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#53b1b8]">
      Our Services!
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
      At CodrionAI, we specialize in building intelligent automation systems, RAG pipelines, and scalable SaaS products that transform how businesses operate. Every solution we create is engineered for precision, performance, and future-ready AI innovation.
    </p>
  </motion.div>

  {/* Services Grid */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
               gap-6 sm:gap-8 md:gap-10 
               w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-0
               place-items-center"
  >
    {services.map((service, index) => (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-[rgb(4,27,39)] rounded-xl shadow-md 
                   p-5 sm:p-6 md:p-7 
                   hover:shadow-[#53b1b8]/40 
                   transition-all duration-300 hover:-translate-y-2 
                   w-full max-w-[21rem] h-auto min-h-[20rem]"
      >
        <div className="flex items-center gap-3 mb-3">
          {service.icon}
          <h2 className="text-lg font-semibold">{service.title}</h2>
        </div>
        <p className="text-sm text-gray-300 my-3 w-full max-w-[18rem]">
          {service.description}
        </p>
        <ul className="space-y-1.5 text-gray-400 list-disc list-inside">
          {service.list.map((item, i) => (
            <li key={i} className="hover:text-[#53b1b8] transition text-sm">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</div>

  );
}
