"use client";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
 
  return (
   <nav className="w-full px-6 sm:px-8 py-3 flex items-center justify-center lg:justify-between shadow-md bg-transparent relative top-0 z-20">
  {/* Logo Section */}
  <div className="flex items-center justify-center gap-4">
    <div className="relative w-36 h-auto flex items-center justify-center">
      <Image
        src="/images/logo1.png"
        alt="Tribotex Logo"
        width={160}
        height={80}
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* Desktop Navigation (visible only on lg and above) */}
  <div className="hidden lg:flex items-center gap-8 border border-gray-600 border-opacity-10 pl-4 pr-1 py-1 rounded-lg shadow-md bg-gray-900/80">
    <Link href="#home" className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition">
      Home
    </Link>
    <Link href="#services" className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition">
      Services
    </Link>
    <Link href="#ai_automation" className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition">
      AI Automation
    </Link>
    <Link href="#about_us" className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition">
      About Us
    </Link>
    <Link href="#contact_us" className="text-gray-100 font-semibold hover:font-bold hover:text-[#53b1b8] transition">
      Contact Us
    </Link>

    <Link
      href="#contact_us"
      className="relative inline-flex items-center justify-center px-5 py-2 text-white font-semibold rounded-xl 
         bg-gradient-to-r from-[#0ba5ec] via-[#53b1b8] to-[#053b44] 
         bg-[length:200%_200%] animate-gradient-flow
         shadow-[0_0_15px_rgba(83,177,184,0.5)]
         hover:shadow-[0_0_30px_rgba(83,177,184,0.8)]
         hover:scale-[1.05] transition-all duration-500 ease-out"
    >
      <span className="relative z-10">Book a Free Demo</span>
      <span className="absolute inset-0 rounded-xl border border-white/20"></span>
    </Link>
  </div>
</nav>


  );
}
