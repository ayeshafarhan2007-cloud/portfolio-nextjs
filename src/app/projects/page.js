export default function ProjectsPage() {
  const projects = [
    {
      title: "💱 Currency Converter",
      tech: "HTML • CSS • JavaScript",
      description:
        "A responsive web application that converts currencies using live exchange rate data with a clean and user-friendly interface.",
    },
    {
      title: "🎓 Kids Learning Application",
      tech: "C# • Windows Forms",
      description:
        "An educational desktop application designed to help children learn through interactive games and activities.",
    },
    {
      title: "🌐 Personal Portfolio",
      tech: "Next.js • React",
      description:
        "A modern portfolio website showcasing my projects, skills, certificates and development journey.",
    },
    {
      title: "🤖 AI Portfolio Assistant",
      tech: "Next.js • AI SDK • Anthropic",
      description:
        "An AI-powered assistant that answers questions about my projects, technical skills and experience.",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>My Projects</h1>

      <p style={{ marginBottom: "40px", fontSize: "18px" }}>
        These are some of the projects I've built while learning Software
        Engineering and Front-End AI Development.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2>{project.title}</h2>

            <p style={{ color: "#2563eb", fontWeight: "bold" }}>
              {project.tech}
            </p>

            <p style={{ lineHeight: "1.7" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}