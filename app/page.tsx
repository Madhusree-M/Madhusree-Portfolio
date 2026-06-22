"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function Home() {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formStatusMessage, setFormStatusMessage] = useState("");

  // Clipboard toast states
  const [toastMessage, setToastMessage] = useState("");

  // Horizontal Scroll Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const container = containerRef.current;
      const track = trackRef.current;

      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const containerTop = scrollTop + rect.top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = containerTop;
      const end = containerTop + containerHeight - viewportHeight;

      let r = 0;
      if (scrollTop < start) {
        r = 0;
      } else if (scrollTop > end) {
        r = 1;
      } else {
        r = (scrollTop - start) / (end - start);
      }

      const maxTranslate = track.scrollWidth - window.innerWidth;
      const translateX = r * Math.max(0, maxTranslate);

      track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setFormStatusMessage("Please fill in all required fields.");
      return;
    }
    setFormStatus("sending");
    setFormStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      setFormStatus("success");
      setFormStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setFormStatusMessage(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  };

  const scrollIntoSection = (id: string) => {
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

  // Projects list
  const projects = [
    {
      number: "01",
      title: "EFIQ Solutions",
      description:
        "A professional company website developed with a modern and responsive interface focused on clean UI, smooth navigation, and user experience.",
      image: "/efiq.png",
      live: "https://efiqsolutions.com/",
      github: "https://github.com/Madhusree-M/EFIQ-Solutions",
      tech: ["React.js", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Learn Together",
      description:
        "A collaborative learning platform designed to help students learn, share resources, and grow together through interactive features and modern UI.",
      image: "/learn-together.png",
      live: "https://learn-together-ten.vercel.app",
      github: "https://github.com/Madhusree-M/LearnTogether",
      tech: ["MERN Stack"],
    },
    {
      number: "03",
      title: "Vasanthi Knots",
      description:
        "An e-commerce demo project built with a modern shopping experience including product browsing, responsive layouts, and intuitive UI design.",
      image: "/vasanthi-knots.png",
      live: "https://e-commerce-fe-ruddy.vercel.app/",
      github: "https://github.com/Madhusree-M/Vasanthi-Knots",
      tech: ["React", "Tailwind CSS"],
    },
    {
      number: "04",
      title: "QuizBee",
      description:
        "An interactive quiz application focused on engaging UI, dynamic question handling, and real-time score tracking.",
      image: "/quizbee1.png",
      live: "https://madhusree-m.github.io/QuizBee/",
      github: "https://github.com/Madhusree-M/QuizBee",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // Journey timeline items
  const journey = [
    {
      type: "education",
      title: "SSLC",
      period: "2021 - 2022",
      institution: "Government Higher Secondary School, Vadasithur",
      result: "Scored 97.8%",
    },
    {
      type: "education",
      title: "HSC",
      period: "2023 - 2024",
      institution: "Government Higher Secondary School, Vadasithur",
      result: "Scored 95%",
    },
    {
      type: "education",
      title: "BE Computer Science Engineering",
      period: "2024 - 2028",
      institution: "Sri Eshwar College of Engineering",
      result: "CGPA - 9.64 (upto 3rd Semester)",
    },
    {
      type: "internship",
      title: "MERN Stack Internship",
      period: "Dec 2025",
      institution: "Better Tomorrow",
      result: "Learned backend architecture and full stack integration.",
    },
    {
      type: "internship",
      title: "Full Stack Internship",
      period: "May 2026",
      institution: "EFIQ Solutions",
      result: "Contributed to live project architectures and responsive interfaces.",
    },
  ];

  // Skills toolkit
  const skills = [
    {
      name: "HTML5",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 10.027.002.244-2.625H5.474l.7 7.875H16.09l-.367 4.125-3.723 1.03-3.724-1.03-.238-2.625H5.414l.438 5.062 6.148 1.71 6.148-1.71.794-8.937H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 6.25l.354 4h9.232l-.328 3.688-3.848 1.062-3.848-1.062-.246-2.812H4.85l.438 5 6.712 1.875 6.712-1.875.766-8.875H6.59z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.156-.818-.846-1.524-2.28-2.112-.892-.358-1.524-.65-1.896-.874-.532-.33-.808-.686-.808-1.068 0-.58.428-.97 1.156-.97.712 0 1.2.298 1.488.9.1.206.27.318.528.318h1.724c.26 0 .426-.188.358-.456-.46-1.878-1.92-3.094-4.148-3.094-2.316 0-3.924 1.344-3.924 3.284 0 1.444.82 2.456 2.484 3.12.892.358 1.636.69 2.228.994.618.316.924.698.924 1.144 0 .618-.556 1.05-1.428 1.05-.986 0-1.636-.438-1.986-1.294-.1-.234-.234-.318-.496-.318h-1.824c-.28 0-.426.17-.344.478.47 1.77 2.122 3.12 4.672 3.12 2.656 0 4.412-1.31 4.412-3.418 0-1.442-.816-2.456-2.518-3.124zm-9.352-7.382h-2.164c-.29 0-.444.17-.444.478v8.666c0 .28-.158.438-.438.438H7.786c-.28 0-.438-.158-.438-.438v-8.666c0-.308-.154-.478-.444-.478H4.756c-.308 0-.478.156-.478.462v1.542c0 .308.17.478.478.478h1.164c.29 0 .438.158.438.438v6.726c0 1.724 1.05 2.724 2.81 2.724.818 0 1.542-.234 1.956-.566.216-.17.312-.39.312-.67v-10.7c0-.312-.17-.468-.48-.468zm-3.04-3.024c0-.858-.69-1.548-1.548-1.548-.856 0-1.546.69-1.546 1.548 0 .856.69 1.546 1.546 1.546.858 0 1.548-.69 1.548-1.546z" />
        </svg>
      ),
    },
    {
      name: "React",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" className="hidden" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(150 12 12)" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.25 15.5H11.5v-7.147l-3.326 5.3A1 1 0 0 1 7 15.5V9.5h1.75v5.992l3.208-5.112A1.25 1.25 0 0 1 13 10v7.5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.757 5.908v11.815L12 24l10.243-6.277V5.908L12 0zm-1.8 17.524c-1.393-.324-2.279-1.28-2.279-2.585 0-.178.118-.328.29-.328h1.46c.162 0 .285.12.308.28.14.945.748 1.298 1.636 1.298.817 0 1.343-.393 1.343-1.02 0-.671-.433-.94-1.597-1.248l-.75-.2c-1.576-.421-2.228-1.233-2.228-2.433 0-1.554 1.229-2.614 3.037-2.614.965 0 1.848.337 2.33 1.011.107.15.068.356-.089.444l-1.012.563c-.14.077-.312.036-.399-.092-.284-.423-.74-.627-1.23-.627-.674 0-1.096.347-1.096.864 0 .584.457.818 1.488 1.09l.794.215c1.782.476 2.368 1.29 2.368 2.582 0 1.764-1.326 2.766-3.237 2.766-1.082 0-2.029-.39-2.317-1.168z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.78 24c-.06 0-1.18-5.32-1.18-10.42 0-6.14 1.12-10.87 1.15-11 .02-.08.02-.2 0-.28a.38.38 0 0 0-.27-.27C12.35 2 7.74 3.63 5.92 8.7a12.67 12.67 0 0 0-.4 7.6 15 15 0 0 0 4.1 7.21 1.7 1.7 0 0 0 1.2.49h1.96zm1.3-.06c.07 0 1.13-5.3 1.13-10.33 0-6.07-1.07-10.74-1.1-10.87a.38.38 0 0 0 0-.28.38.38 0 0 1 .26-.26c.12-.03 4.54 1.58 6.27 6.6a12.44 12.44 0 0 1 .38 7.51 14.83 14.83 0 0 1-3.93 7.14 1.67 1.67 0 0 1-1.16.49h-1.85z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen selection:bg-cyan-100 selection:text-cyan-900">

      {/* Toast Notification for copying contact details */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-900 text-white px-6 py-3 rounded-2xl shadow-xl border border-cyan-800 animate-bounce transition-all duration-300">
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 min-h-[calc(100vh-80px)] py-12 px-6 md:px-16 flex flex-col justify-center bg-slate-50">
        {/* Diagonal cyan background block */}
        <div
          className="absolute top-0 right-0 h-full w-[50%] bg-cyan-900 hidden lg:block"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
        ></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <p className="text-cyan-800 font-bold tracking-[0.2em] text-sm uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-cyan-950 leading-none">
                Madhusree M
              </h1>
            </div>

            <p className="text-lg md:text-xl font-semibold text-slate-600 border-l-4 border-cyan-700 pl-4 py-1">
              Full Stack Developer | Competitive Programmer | Passionate Learner
            </p>

            <p className="text-slate-600 leading-relaxed text-base max-w-xl">
              I design and build robust web applications using the MERN and Next.js stacks.
              As a computer science student, I love writing clean code, solving complex algorithms,
              and turning challenging problems into beautiful user experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Madhusree-M"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 text-cyan-950 rounded-2xl shadow-sm hover:scale-110 hover:border-cyan-800 hover:text-cyan-800 hover:shadow-cyan-900/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/madhusree-m-230699333/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 text-cyan-950 rounded-2xl shadow-sm hover:scale-110 hover:border-cyan-800 hover:text-cyan-800 hover:shadow-cyan-900/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>

              {/* <a
                href="https://www.instagram.com/__madhusree__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-slate-200 text-cyan-950 rounded-2xl shadow-sm hover:scale-110 hover:border-cyan-800 hover:text-cyan-800 hover:shadow-cyan-900/10 transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
                </svg>
              </a> */}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollIntoSection("contact")}
                className="px-8 py-4 bg-cyan-900 text-white font-semibold rounded-2xl shadow-md hover:bg-cyan-850 hover:shadow-cyan-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="/Madhusree.M-Resume.pdf"
                download="Madhusree_Resume.pdf"
                className="px-8 py-4 border-2 border-cyan-900 text-cyan-900 font-semibold rounded-2xl hover:bg-cyan-900/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-block text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <div className="relative group w-[300px] h-[380px] md:w-[420px] md:h-[520px]">
              {/* Offset backing block */}
              <div className="absolute inset-0 bg-white/20 border-4 border-white/40 rounded-3xl translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-7 group-hover:translate-y-7"></div>

              {/* Main Image Card — solid white background */}
              <div className="relative w-full h-full bg-white border-4 border-white rounded-3xl overflow-hidden transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 shadow-2xl">
                {/* Inner zoom wrapper — scale up and shift to center the person */}
                <div className="absolute inset-0 scale-[2] translate-y-[5%] transition-transform duration-500 group-hover:scale-[1.9]">
                  <Image
                    src="/Madhu-photo2.png"
                    alt="Madhusree M"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 300px, 420px"
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* About Text Left */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-cyan-800 font-bold tracking-[0.25em] text-xs uppercase mb-2">
                  Who Am I
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-cyan-950">
                  Building Ideas Into <span className="text-cyan-800">Reality</span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                I am a passionate Full Stack Developer and Competitive Programmer pursuing my BE in Computer Science Engineering.
                I enjoy building modern web interfaces, designing responsive structures, and tackling logic challenges.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center hover:border-cyan-200 transition-all duration-300 shadow-sm">
                  <span className="block text-3xl font-black text-cyan-900">10+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">Projects Built</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center hover:border-cyan-200 transition-all duration-300 shadow-sm">
                  <span className="block text-3xl font-black text-cyan-900">2+</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">Years Coding</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center hover:border-cyan-200 transition-all duration-300 shadow-sm">
                  <span className="block text-3xl font-black text-cyan-900">100%</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">Dedicated</span>
                </div>
              </div>
            </div>

            {/* About Cards Right */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-cyan-900/20 hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-950 mb-2">Technical Dimension</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I enjoy building modern web applications, solving challenging logical problems, and exploring scalable software solutions using current technologies.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-cyan-900/20 hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-950 mb-2">Personal Life</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I enjoy spending quality time with family, gardening, and maintaining a peaceful balance that keeps me creative, focused, and motivated.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-cyan-900/20 hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-950 mb-2">Leadership & Activities</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I love collaborating with people, organizing tech events, leading developers in teams, and contributing to productive and engaging environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 md:px-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-cyan-800 font-bold tracking-[0.25em] text-xs uppercase">
              My Toolkit
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-cyan-950">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Here are the core languages, libraries, databases, and frameworks that I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-white border border-slate-200/80 p-8 rounded-2xl text-center flex flex-col items-center justify-center gap-4 hover:border-cyan-900 hover:bg-cyan-900 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="text-cyan-800 group-hover:text-cyan-200 transition-colors duration-300">
                  {skill.svg}
                </div>
                <span className="font-bold text-slate-800 group-hover:text-white text-base tracking-wide transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" ref={containerRef} className="relative h-[350vh] bg-white border-t border-slate-100">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16 mb-8">
            <div className="space-y-2">
              <p className="text-cyan-800 font-bold tracking-[0.25em] text-xs uppercase">
                Portfolio
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-cyan-950">
                Things I’ve Built
              </h2>
              <p className="text-slate-600 max-w-xl text-sm hidden md:block">
                A curated list of web applications showcasing frontend design, MERN integration, and fully responsive layouts.
              </p>
            </div>
          </div>

          {/* Horizontal slider container */}
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 md:gap-16 px-6 md:px-[max(4rem,calc((100vw-1280px)/2+64px))] transition-transform duration-100 ease-out"
              style={{ transform: `translate3d(0, 0, 0)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.number}
                  className="w-[88vw] md:w-[78vw] max-w-[1150px] shrink-0 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-slate-50 border border-slate-150 p-8 md:p-12 rounded-[36px] shadow-md transition-all duration-300"
                >
                  {/* Image Div */}
                  <div className="lg:col-span-7">
                    <div className="relative group w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Div */}
                  <div className="lg:col-span-5 space-y-4 md:space-y-6">
                    <span className="font-mono text-cyan-800 font-bold text-lg">{project.number}</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-950 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Tech List */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyan-50 border border-cyan-100 text-cyan-900"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-cyan-900 text-white text-sm font-semibold rounded-xl hover:bg-cyan-850 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-cyan-900 text-cyan-900 text-sm font-semibold rounded-xl hover:bg-cyan-900/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
                      >
                        GitHub Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY SECTION */}
      <section id="journey" className="py-24 px-6 md:px-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <p className="text-cyan-800 font-bold tracking-[0.25em] text-xs uppercase">
              Timeline
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-cyan-950">
              My Learning Journey
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Walk through the timeline of my academic background and engineering internships.
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-100 ml-4 md:ml-1/2 md:border-l-0">
            {/* Center line for desktop timeline */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {journey.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
                    {/* Desktop layout: Left Card space */}
                    <div className={isEven ? "w-full pl-8 md:pl-0 md:w-[45%] md:text-right" : "hidden md:block md:w-[45%]"}>
                      {isEven && (
                        <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <span className="inline-block px-3 py-1 text-xs font-bold bg-cyan-50 text-cyan-900 border border-cyan-100 rounded-full mb-3">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold text-cyan-950">{item.title}</h3>
                          <p className="text-slate-600 mt-2 text-sm">{item.institution}</p>
                          <p className="text-cyan-850 mt-3 font-semibold text-sm">{item.result}</p>
                        </div>
                      )}
                    </div>

                    {/* Timeline Node Point */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-cyan-900 border-4 border-white flex items-center justify-center text-white text-xs shadow-md">
                      {item.type === "education" ? "Ed" : "In"}
                    </div>

                    {/* Desktop layout: Right Card space */}
                    <div className={!isEven ? "w-full pl-8 md:pl-0 md:w-[45%] md:text-left" : "hidden md:block md:w-[45%]"}>
                      {!isEven && (
                        <div className="bg-cyan-900 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                          <span className="inline-block px-3 py-1 text-xs font-bold bg-cyan-850 text-cyan-200 border border-cyan-800 rounded-full mb-3">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-cyan-100 mt-2 text-sm">{item.institution}</p>
                          <p className="text-cyan-200 mt-3 font-semibold text-sm">{item.result}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <p className="text-cyan-800 font-bold tracking-[0.25em] text-xs uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-cyan-950">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Feel free to drop a message, reach out by phone, or find me on professional networks.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact details: Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-cyan-950 mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-150">
                    <div className="p-2.5 bg-cyan-50 text-cyan-900 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</span>
                      <a href="mailto:mmadhusreemayilsamy@gmail.com" className="text-sm font-semibold text-cyan-950 hover:underline truncate block">
                        mmadhusreemayilsamy@gmail.com
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("mmadhusreemayilsamy@gmail.com", "email")}
                      className="text-xs bg-slate-100 hover:bg-cyan-900 hover:text-white px-2.5 py-1.5 rounded-md font-semibold text-slate-600 transition-all cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-150">
                    <div className="p-2.5 bg-cyan-50 text-cyan-900 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider">Phone Number</span>
                      <a href="tel:+919659013590" className="text-sm font-semibold text-cyan-950 hover:underline truncate block">
                        +91 9659013590
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("+919659013590", "phone number")}
                      className="text-xs bg-slate-100 hover:bg-cyan-900 hover:text-white px-2.5 py-1.5 rounded-md font-semibold text-slate-600 transition-all cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="text-lg font-bold">Collaborations</h3>
                <p className="text-sm text-cyan-100 leading-relaxed">
                  I am open to summer internships, full-time developer roles, and open-source contributions.
                  Let&apos;s make something amazing together!
                </p>
              </div>
            </div>

            {/* Interactive Form: Right Column */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-cyan-950 mb-6">Send Me a Message</h3>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-800 focus:outline-none transition-colors duration-200 text-slate-800 font-medium text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-800 focus:outline-none transition-colors duration-200 text-slate-800 font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-800 focus:outline-none transition-colors duration-200 text-slate-800 font-medium text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-cyan-800 focus:outline-none transition-colors duration-200 text-slate-800 font-medium text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 bg-cyan-900 text-white font-bold rounded-xl hover:bg-cyan-850 focus:outline-none active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Sending Message..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-150 text-emerald-900 rounded-xl text-center font-semibold text-sm animate-pulse">
                    {formStatusMessage}
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-rose-50 border border-rose-150 text-rose-900 rounded-xl text-center font-semibold text-sm">
                    {formStatusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
