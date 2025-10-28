"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dmSans } from "../layout";
const AboutUs: React.FC = () => {
  return (
    <div id="about_us" >
      <div className={`bg-white text-gray-900 px-6 md:px-24 py-4 flex flex-col md:flex-row items-center justify-center ${dmSans.className}`}>
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="/images/who_we_are.jpg"
              alt="Team working together on technology"
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
          className="md:w-1/2 text-center md:text-left "
        >
          <h1 className="text-md text-gray-500 mb-6">Who We Are?</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 ">
            Ideas Breathe, We Give Them Life.
          </h2>
          <p className="text-gray-700 text-md leading-relaxed  text-justify max-w-[30rem] font-normal">
            At{" "}
            <span className="text-[#53b1b8] font-semibold">Tribotex.io</span>,
            we believe businesses should not just evolve — they should leap
            ahead. Founded on the vision to simplify growth through technology,
            we bring together the top 1% of global talent in development, AI,
            design, and marketing. Our mission is to empower business owners
            with powerful tools that reduce workload, save time, and accelerate
            growth. From custom software to AI-driven automation, every solution
            we craft is designed with performance, scalability, and impact in
            mind. We don’t just build tech —{" "}
            <span className="font-semibold text-[#53b1b8]">
              we build outcomes.
            </span>
          </p>
        </motion.div>
      </div>
      <div className= {`bg-white text-gray-900 px-6 md:px-24 py-4 flex flex-col md:flex-row items-center justify-center  ${dmSans.className}`}>
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-md text-gray-500 mb-6">What We Do?</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            No “magic.” Just Proven Logic.
          </h2>
          <p className="text-gray-700 text-md leading-relaxed text-justify max-w-[30rem] font-normal">
            We offer end-to-end digital solutions that merge creativity with
            technology and intelligence with automation. Our services are
            designed to give business owners a competitive edge in the digital
            age. Whether it’s building a custom{" "}
            <span className="font-semibold text-[#53b1b8]">SaaS</span> product
            from the ground up, creating intelligent chatbots and{" "}
            <span className="font-semibold text-[#53b1b8]">sales agents,</span>{" "}
            or automating day-to-day{" "}
            <span className="font-semibold text-[#53b1b8]">
              repetitive tasks,
            </span>{" "}
            we ensure every solution aligns with your business goals. Our team
            integrates seamlessly into your workflow, offering both standalone
            development and enhancements for your existing tools and platforms.
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
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="/images/what_we_do.jpg"
              alt="Digital collaboration and innovation"
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
