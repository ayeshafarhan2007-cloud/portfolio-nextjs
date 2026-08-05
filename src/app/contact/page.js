export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Contact Me</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Thanks for visiting my portfolio! I'm always open to discussing
        software development, internships, collaboration opportunities,
        or new ideas.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>📧 Email</h3>
          <p>your-email@example.com</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>💻 GitHub</h3>
          <p>https://github.com/your-username</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>💼 LinkedIn</h3>
          <p>https://linkedin.com/in/your-profile</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>📍 Location</h3>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <p
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#666",
        }}
      >
        Looking forward to connecting with you!
      </p>
    </main>
  );
}