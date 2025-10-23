"use client";

import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaLaptopCode, FaChartLine, FaPaintBrush, FaSyncAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "SAAS Solutions",
      icon: <FaCogs className="text-4xl text-[#53b1b8]" />,
      description:
        "From Idea to Infrastructure—Fully Engineered. We build secure, scalable, and high-performing software tailored to your business model with modern frameworks and best practices.",
      list: [
        "DevOps Setup & Deployment",
        "SaaS MVP Development",
        "Rapid SaaS Prototyping & Design",
        "API Development & Integration",
        "Ongoing SaaS Maintenance & Support",
      ],
    },
    {
      title: "Web & Mobile Apps",
      icon: <FaLaptopCode className="text-4xl text-[#53b1b8]" />,
      description:
        "User-Centric, Cross-Platform, Future-Ready. We deliver responsive and high-performance apps built for mobile and web with a seamless experience across all devices.",
      list: [
        "Cross-Platform Android/iOS/Websites",
        "E-commerce & Multi-Vendor Solutions",
        "Industry & Consumer-Facing Apps",
        "In-House Consultation & Architecture",
        "Maintenance, Support & Migration",
      ],
    },
    {
      title: "Sales & Marketing",
      icon: <FaChartLine className="text-4xl text-[#53b1b8]" />,
      description:
        "Drive Demand. Close Faster. Scale Smarter. We power up your sales pipeline with tailored marketing strategies, lead generation, and conversion-focused campaigns built for results.",
      list: [
        "Lead Generation",
        "Pay-Per-Click Ads",
        "Social Media Marketing",
        "Outreach & Email Marketing",
        "Cold Calling with AI Sales Agents",
      ],
    },
    {
      title: "Business Automation",
      icon: <FaSyncAlt className="text-4xl text-[#53b1b8]" />,
      description:
        "Let AI Handle the Busywork. You Focus on Growth. We automate 90% of your repetitive operations—cutting manual labor, increasing productivity, and driving long-term profitability.",
      list: [
        "Workflow Automation",
        "Custom Integration Solutions",
        "Outreach Follow-up Sequences",
        "Invoicing & Payment Collection",
        "Internal Process Optimization",
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <FaRobot className="text-4xl text-[#53b1b8]" />,
      description:
        "Smarter Systems. Faster Growth. AI at the Core. From chatbots to fully autonomous AI agents, we craft intelligent systems to boost efficiency, reduce overhead, and scale operations.",
      list: [
        "Custom AI Automations",
        "Conversational Chatbots",
        "AI-Powered Sales Agents",
        "LLM Training & Fine-Tuning",
        "Custom ML-Engineering",
      ],
    },
    {
      title: "Design & Branding",
      icon: <FaPaintBrush className="text-4xl text-[#53b1b8]" />,
      description:
        "Designs That Speak, Brands That Connect. We translate your brand essence into powerful visuals and product designs that not only look good but convert better.",
      list: [
        "UI/UX Design for Web & Mobile",
        "Product & Platform Design",
        "Brand Identity & Logo Systems",
        "Conversion-Driven Marketing Materials",
        "Design Systems & Prototypes",
      ],
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-[#053b44] text-gray-100 px-6 md:px-16 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#53b1b8]">
          Our Services!
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We specialize in building robust, scalable, and secure web and mobile
          applications. Our team uses the latest frameworks and industry best
          practices to bring your ideas to life. Each project is fully custom-coded,
          responsive, and tailored for performance, reliability, and scalability.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#041b27] rounded-2xl shadow-lg p-8 hover:shadow-[#53b1b8]/40 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              {service.list.map((item, i) => (
                <li key={i} className="hover:text-[#53b1b8] transition">
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
