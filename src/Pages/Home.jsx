import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/PortfolioImage.JPG";
import WorkImg from "../assets/CodeImage.jpeg";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";


const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ background: "radial-gradient(ellipse at 60% 40%, #2a0a3a 0%, #0d0d1a 60%, #0a0a14 100%)", paddingTop: "58px" }}>
      
      {/* Starfield dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              background: "white",
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Purple glow blob center-right */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "10%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,40,180,0.35) 0%, rgba(80,20,140,0.15) 50%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />

      {/* Right side work desk photo */}
      <div
        className="absolute top-0 right-0 h-full z-0 hidden md:block"
        style={{ width: "38%" }}
      >
        <img
          src={WorkImg}
          alt="Working at desk"
          className="w-full h-full object-cover object-left"
          style={{ opacity: 0.85 }}
        />
        {/* fade left edge into dark */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0d0d1a 0%, rgba(13,13,26,0.3) 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 sm:px-12 md:px-16 lg:px-20 pt-20 pb-16 md:w-[62%]">

        {/* Open to opportunities badge */}
        <div className="mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#e0e0e0",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open{" "}
            <span style={{ color: "#a78bfa" }}>to opportunities</span>
          </span>
        </div>

        {/* Profile + Info row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
          {/* Circular profile photo */}
          <div
            className="flex-shrink-0 rounded-full overflow-hidden"
            style={{
              width: "190px",
              height: "190px",
              border: "3px solid rgba(167,139,250,0.4)",
              boxShadow: "0 0 30px rgba(120,40,180,0.4)",
            }}
          >
            <img
              src={ProfileImg}
              alt="Gaurav Sarkar"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Name, title, contacts */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight">
              Gaurav Sarkar
            </h1>
            <p className="text-gray-300 font-semibold text-xl tracking-wide">
              Frontend Developer
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              <a
                href="tel:+919163028087"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <span className="text-blue-400 text-base">📞</span>
                +91-9163028087
              </a>
              <a
                href="mailto:gauravsarkar2002@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <span className="text-gray-400 text-base">✉️</span>
                gauravsarkar2002@gmail.com
              </a>
            </div>

            {/* Social links row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                {/* GitHub icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                {/* LinkedIn icon */}
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                </svg>
                Linkedin Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bio section with left border */}
        <div
          className="mb-auto max-w-lg"
          style={{
            borderLeft: "3px solid rgba(167,139,250,0.6)",
            paddingLeft: "16px",
          }}
        >
          <p className="text-gray-400 text-base leading-relaxed">
            B.Tech CSE @ Bengal Institute of Technology. Crafting responsive, high-performance web experiences with React.js – one component at a time.
          </p>
        </div>

        {/* Scroll to Discover */}
        <div className="flex flex-col items-center gap-3 mt-16 self-center">
          <p className="text-gray-400 text-sm tracking-widest">Scroll to Discover</p>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-purple-500 opacity-60" />
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <div className="w-2 h-2 rounded-full bg-pink-500 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;