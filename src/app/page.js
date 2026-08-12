import Link from "next/link";
import LazyAIChat from "../components/LazyAIChat";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "40px 0" }}>
        <h1 style={{ fontSize: "54px", marginBottom: "10px" }}>
          Hi, I'm Ayesha 👋
        </h1>

        <h2
          style={{
            color: "#555",
            fontWeight: "normal",
            marginBottom: "20px",
          }}
        >
          Software Engineering Student | Front-End AI Developer
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.7",
            fontSize: "18px",
          }}
        >
          I enjoy building modern web applications using React, Next.js and AI
          technologies. This portfolio showcases my projects, technical skills,
          certificates, and development journey.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <Link href="/projects">
            <button
              style={{
                padding: "14px 28px",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>
          </Link>

          <Link href="/contact">
            <button
              style={{
                padding: "14px 28px",
                cursor: "pointer",
              }}
            >
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      <hr style={{ margin: "50px 0" }} />

      {/* Skills Section */}
      <section>
        <h2 style={{ textAlign: "center" }}>Technical Skills</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Python",
            "C++",
            "C#",
            "Git",
            "GitHub",
            "AI Development",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "12px 20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <hr style={{ margin: "50px 0" }} />

      {/* AI Assistant */}
      <section style={{ marginTop: "50px" }}>
        <h2>🤖 AI Portfolio Assistant</h2>

        <p>
          Ask me about my projects, technical skills, certificates or experience.
        </p>

        <LazyAIChat />
      </section>
    </main>
  );
}