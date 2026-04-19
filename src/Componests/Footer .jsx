import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "About & Skills", path: "/about" },
    { name: "Experience & Projects", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/Gaurav41507",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gaurav-sarkar-60299b289/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:gauravsarkar2002@gmail.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="w-full"
      style={{ background: "#0f0f14", borderTop: "1px solid #1e1e2a" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-14">

        {/* Top row — logo/tagline left, nav links right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Left: GS. branding */}
          <div className="flex flex-col gap-2">
            <Link to="/">
              <span
                className="text-3xl font-black tracking-tighter"
                style={{ color: "#c44df0" }}
              >
                GS.
              </span>
            </Link>
            <p className="text-sm" style={{ color: "#7a7a88" }}>
              Frontend Developer · React.js · B.Tech CSE
            </p>
            <a 
              href="mailto:gauravsarkar2002@gmail.com"
              className="text-[12px] hover:text-[#c44df0] transition-colors"
              style={{ color: "#4a4a5a" }}
            >
              gauravsarkar2002@gmail.com
            </a>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-widest transition-colors duration-200"
                style={{ color: "#7a7a88" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.target.style.color = "#7a7a88")}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1e1e2a" }} className="mb-8" />

        {/* Bottom row — copyright left, socials right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm" style={{ color: "#4a4a5a" }}>
            © {new Date().getFullYear()} Gaurav Sarkar. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#7a7a88",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(196,77,240,0.2)";
                  e.currentTarget.style.borderColor = "rgba(196,77,240,0.5)";
                  e.currentTarget.style.color = "#c44df0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#7a7a88";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
