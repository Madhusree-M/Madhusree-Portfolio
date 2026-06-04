function Skills()
{
    return(
        <div className="py-24 px-8 md:px-16 bg-white">

  <h1 className="text-5xl font-bold text-cyan-900 mb-16">
    Skills
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ].map((skill) => (
      <div
        key={skill}
        className="border border-cyan-100 bg-cyan-50 p-6 rounded-2xl text-center font-semibold text-cyan-900 hover:bg-cyan-800 hover:text-white transition-all duration-300"
      >
        {skill}
      </div>
    ))}

  </div>
</div>
    )
}

export default Skills;