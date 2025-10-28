import { dmSans } from "../layout";


export default function Home() {
  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 ${dmSans.className}`}
    >
        <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className="relative z-10">
      {/* Heading with weight 600 */}
      <h1
        className="text-5xl md:text-5xl leading-snug mb-6 max-w-4xl font-semibold"
        style={{ color: "#53b1b8" }}
      >
        Your Growth, Engineered by{" "}
        <span className="text-white">AI + Elite Talent</span>
      </h1>

      {/* Paragraph with weight 400 (normal) */}
      <p className="text-md  text-gray-400 max-w-5xl mb-28 font-normal">
        We believe businesses shouldn’t crawl through digital transformation — they
        should leap ahead. We’re a collective of top-tier developers, designers,
        marketers, and AI engineers who turn bold ideas into powerful digital
        systems. Whether you need a custom SaaS, intelligent chatbots, or full-blown
        sales automation, we build the infrastructure for growth — fast, functional,
        and future-ready.
      </p>
      </div>
    </section>
  );
}
