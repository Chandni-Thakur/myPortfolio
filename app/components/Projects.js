export default function Projects() {
  const projectList = [
    {
      title: "Airline Management System",
      description: "A Java-based desktop app for booking flights, managing users, and admin control.",
      link: "https://github.com/Chandni-Thakur/Air-Line-management-system"
    },
    {
      title: "MCP System",
      description: "Full Stack web app with MongoDB, Express, React, and Node.js for managing pickup partners.",
      link: "#" // Update this with the actual GitHub or deployment link when ready
    },
    {
      title: "Portfolio Website",
      description: "This modern personal portfolio built using Next.js and Tailwind CSS.",
      link: "#" // Same here — replace when deployed or uploaded
    }
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-indigo-500/50 transition">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
