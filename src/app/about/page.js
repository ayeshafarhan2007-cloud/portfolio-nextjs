export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>About Me</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Hello! I'm <strong>Ayesha</strong>, a Software Engineering student with
        a passion for front-end development, artificial intelligence, and
        creating modern web applications.
      </p>

      <p style={{ lineHeight: "1.8" }}>
        I enjoy learning new technologies and building projects that solve
        real-world problems. My goal is to become a skilled Front-End AI
        Developer while continuously improving my programming and software
        engineering skills.
      </p>

      <hr style={{ margin: "35px 0" }} />

      <h2>Education</h2>

      <p>
        <strong>Bachelor of Software Engineering</strong>
      </p>

      <p>NED University of Engineering & Technology</p>

      <hr style={{ margin: "35px 0" }} />

      <h2>Technical Skills</h2>

      <ul style={{ lineHeight: "2" }}>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>C++</li>
        <li>C#</li>
        <li>Git & GitHub</li>
      </ul>

      <hr style={{ margin: "35px 0" }} />

      <h2>Certificates</h2>

      <ul style={{ lineHeight: "2" }}>
        <li>IBM Cybersecurity Fundamentals</li>
        <li>Machine Learning with Python</li>
        <li>Google AI Professional Certificate</li>
      </ul>
    </main>
  );
}