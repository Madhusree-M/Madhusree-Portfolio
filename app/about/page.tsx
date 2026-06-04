import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-24 overflow-hidden">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Heading */}
          <div>
            <p className="text-cyan-700 font-semibold tracking-[0.3em] mb-3">
              WHO AM I
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900">
              Building Ideas Into
              <span className="text-cyan-700"> Reality</span>
            </h1>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Passionate Full Stack Developer and Competitive Programmer
            focused on creating modern, scalable, and meaningful digital
            experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 pt-4">

            <div className="bg-white/80 border border-slate-200 p-5 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h2 className="text-3xl font-black text-cyan-700">10+</h2>
              <p className="text-slate-600 mt-2 text-sm">
                Projects Built
              </p>
            </div>

            <div className="bg-white/80 border border-slate-200 p-5 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h2 className="text-3xl font-black text-cyan-700">2+</h2>
              <p className="text-slate-600 mt-2 text-sm">
                Years Learning
              </p>
            </div>

            <div className="bg-white/80 border border-slate-200 p-5 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">
              <h2 className="text-3xl font-black text-cyan-700">100%</h2>
              <p className="text-slate-600 mt-2 text-sm">
                Dedication
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* Card 1 */}
          <div className="bg-white/70 border border-slate-200 p-8 rounded-3xl shadow-xl hover:shadow-cyan-900/20 transition duration-500 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-cyan-900 mb-3">
                Technical
              </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              I enjoy building modern web applications, solving challenging
              problems, and exploring scalable software solutions using
              current technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 border border-slate-200 p-8 rounded-3xl shadow-xl hover:shadow-cyan-900/20 transition duration-500 hover:-translate-y-2">

              <h2 className="text-2xl font-bold text-cyan-900 mb-3">
                Personal
              </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              I enjoy spending quality time with family, gardening,
              and maintaining a peaceful balance that keeps me creative,
              focused, and motivated.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" bg-white/70 border border-slate-200 p-8 rounded-3xl shadow-xl hover:shadow-cyan-900/20 transition duration-500 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-cyan-900 mb-3">
                Leadership & Activities
              </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              I love collaborating with people, organizing events,
              leading teams, and contributing to productive and engaging
              environments.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;