"use client";

function Footer() {
  const scrollIntoSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 88;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-cyan-950 text-white border-t border-cyan-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">Madhusree M</h2>
          <p className="text-xs text-cyan-200/70 font-medium">Full Stack Developer & Competitive Programmer</p>
        </div>

        {/* Center Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a
            href="#home"
            onClick={(e) => scrollIntoSection(e, "home")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollIntoSection(e, "about")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollIntoSection(e, "skills")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollIntoSection(e, "projects")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            Projects
          </a>
          <a
            href="#journey"
            onClick={(e) => scrollIntoSection(e, "journey")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            Journey
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollIntoSection(e, "contact")}
            className="text-cyan-100/80 hover:text-cyan-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right Socials & Copyright */}
        <div className="text-center md:text-right space-y-2">
          <p className="text-xs text-cyan-200/50">
            &copy; {new Date().getFullYear()} Madhusree M. All rights reserved.
          </p>
          <p className="text-[10px] text-cyan-200/30">
            Handcrafted with Next.js & Tailwind CSS.
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
