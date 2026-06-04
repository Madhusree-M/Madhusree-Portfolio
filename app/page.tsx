import Image from "next/image";
function Home()
{
  return(
    <>
    <div className="relative z-10 min-h-screen px-16 overflow-hidden flex flex-col justify-center">
      <div
        className="
          absolute
          top-0
          -right-50
          h-full
          w-[50%]
          bg-cyan-900
          skew-x-[-12deg]
          origin-top
        "
      ></div>
      <div className="flex justify-between items-center">
        <div className=" w-full md:w-1/2">
          <div className="flex gap-3 py-5 items-baseline">
            <p className="text-2xl font-semibold text-slate-600">Hello, I'm</p>
            <h1 className="text-7xl font-bold text-cyan-800">
              Madhusree M
            </h1>
          </div>
          <p className="text-xl tracking-[0.1px] font-semibold text-slate-700/60">Full Stack Developer | Competitive Programmer | Passionate Learner</p>
          <div className="mt-15 flex gap-5 mt-8 text-3xl text-cyan-800">
            {/* Github */}
            <a href="https://github.com/Madhusree-M" target="_blank">
              <svg className="hover:scale-120 transition duration-300 w-8 h-8 text-cyan-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/madhusree-m-230699333/" target="_blank">
              <svg className="hover:scale-110 w-8 h-8 text-cyan-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/__madhusree__" target="_blank">
              <svg className="hover:scale-110 w-8 h-8 text-cyan-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
              </svg>
            </a>

          </div>
        </div>
        <Image
          src="/Madhu-image.png"
          alt="Madhusree"
          width={400}
          height={400}
          className=" z-10 border border-cyan-800 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="flex gap-4 mt-8">
        <button className="px-5 py-3 border border-cyan-800 text-cyan-800 rounded-3xl hover:scale-105 hover:bg-cyan-800 hover:text-white duration-300 transition-all">
          Contact Me
        </button>
        <button className="border px-5 py-3 rounded-3xl bg-cyan-800 hover:bg-white hover:scale-105 hover:text-cyan-800 hover:border hover:border-cyan-800 text-white transition-all duration-300 ">
          Download Resume
        </button>
      </div>
    </div>
    <div className="min-h-screen py-24 px-8 md:px-16 bg-white">

  {/* Heading */}
  <div className="text-center mb-10">
    <h1 className="text-5xl md:text-6xl font-bold text-cyan-900">
      Let’s Walk Through My Journey
    </h1>

    <p className="mt-5 text-lg text-gray-600">
      A journey filled with learning, growth, leadership,
      and building meaningful experiences.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative max-w-6xl mx-auto">

    {/* Center Line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-100 transform -translate-x-1/2"></div>

    {/* ITEM 1 */}
    <div className="flex justify-between items-center w-full">

      {/* Left Card */}
      <div className="w-[45%] bg-white shadow-xl rounded-3xl p-8 border border-cyan-100 hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold text-cyan-900">
          SSLC
        </h2>

        <p className="text-cyan-700 mt-2 font-medium">
          2021 - 2022
        </p>

        <p className="mt-4 text-gray-700">
          Government Higher Secondary School, Vadasithur
        </p>

        <p className="mt-3 text-lg font-semibold text-cyan-800">
          Scored 97.8%
        </p>
      </div>

      {/* Center Dot */}
      <div className="w-6 h-6 rounded-full bg-cyan-800 border-4 border-white shadow-lg z-10"></div>

      {/* Empty Space */}
      <div className="w-[45%]"></div>
    </div>

    {/* ITEM 2 */}
    <div className="flex justify-between items-center w-full">

      <div className="w-[45%]"></div>

      {/* Center Dot */}
      <div className="w-6 h-6 rounded-full bg-cyan-800 border-4 border-white shadow-lg z-10"></div>

      {/* Right Card */}
      <div className="w-[45%] bg-cyan-900 text-white shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold">
          HSC
        </h2>

        <p className="text-cyan-100 mt-2 font-medium">
          2023 - 2024
        </p>

        <p className="mt-4 text-cyan-50">
          Government Higher Secondary School, Vadasithur
        </p>

        <p className="mt-3 text-lg font-semibold">
          Scored 95%
        </p>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="flex justify-between items-center w-full">

      {/* Left Card */}
      <div className="w-[45%] bg-white shadow-xl rounded-3xl p-8 border border-cyan-100 hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold text-cyan-900">
          BE Computer Science Engineering
        </h2>

        <p className="text-cyan-700 mt-2 font-medium">
          2024 - 2028
        </p>

        <p className="mt-4 text-gray-700">
          Sri Eshwar College of Engineering
        </p>

        <p className="mt-3 text-lg font-semibold text-cyan-800">
          CGPA - 9.64 (upto 3rd Semester)
        </p>
      </div>

      {/* Center Dot */}
      <div className="w-6 h-6 rounded-full bg-cyan-800 border-4 border-white shadow-lg z-10"></div>

      <div className="w-[45%]"></div>
    </div>

    {/* ITEM 4 */}
    <div className="flex justify-between items-center w-full">

      <div className="w-[45%]"></div>

      {/* Center Dot */}
      <div className="w-6 h-6 rounded-full bg-cyan-800 border-4 border-white shadow-lg z-10"></div>

      {/* Right Card */}
      <div className="w-[45%] bg-cyan-900 text-white shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold">
          MERN Stack Internship
        </h2>

        <p className="text-cyan-100 mt-2 font-medium">
          December 2025
        </p>

        <p className="mt-4 text-cyan-50">
          Better Tomorrow
        </p>
      </div>
    </div>

    {/* ITEM 5 */}
    <div className="flex justify-between items-center w-full">

      {/* Left Card */}
      <div className="w-[45%] bg-white shadow-xl rounded-3xl p-8 border border-cyan-100 hover:-translate-y-2 transition-all duration-300">
        <h2 className="text-2xl font-bold text-cyan-900">
          Full Stack Internship
        </h2>

        <p className="text-cyan-700 mt-2 font-medium">
          May 2026
        </p>

        <p className="mt-4 text-gray-700">
          EFIQ Solutions
        </p>
      </div>

      {/* Center Dot */}
      <div className="w-6 h-6 rounded-full bg-cyan-800 border-4 border-white shadow-lg z-10"></div>

      <div className="w-[45%]"></div>
    </div>

  </div>
</div>
    </>
  )
}

export default Home;