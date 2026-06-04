import Image from "next/image";
import Link from "next/link";

function Projects() {
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

  return (
    <div className="min-h-screen px-8 md:px-16 py-24 bg-white">

      {/* Heading */}
      <div className="mb-8">
          <p className="mt-5 text-cyan-900 font-semibold uppercase tracking-widest">
            Projects
          </p>

        <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mt-6">
          Things I’ve Built
        </h1>

        <p className="text-gray-600 text-lg mt-5 max-w-2xl leading-relaxed">
          Some projects that reflect my learning, creativity,
          and passion for full stack development.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-15">
        {projects.map((project, index) => (
        <div key={index}>
          <div
             className="flex gap-15"
          >

            {/* Image */}
            <div className="w-[60%]">

              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={800}
                className="rounded-3xl shadow-lg border border-cyan-100 hover:scale-[1.02] transition-all duration-300"
              />
            </div>

            {/* Content */}
            <div className="w-[40%]">
              <h2 className="text-4xl font-bold text-cyan-900">
                {project.title}
              </h2>

              <p className="text-gray-600 text-lg mt-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-900"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <Link
                  href={project.live}
                  target="_blank"
                  className="px-5 py-3 rounded-full bg-cyan-900 text-white hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  className="px-5 py-3 rounded-full border border-cyan-900 text-cyan-900 hover:bg-cyan-900 hover:text-white transition-all duration-300"
                >
                  GitHub
                </Link>
              </div>
            </div>

          </div>
          <span className="mt-10 inline-block h-1 w-full  bg-slate-500/50 rounded-full mx-auto"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;