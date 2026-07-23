import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>
      <p>Welcome to my Next.js portfolio.</p>

      <nav style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contact</Link>
        <Link href="/health">Health Check</Link>
      </nav>
    </main>
  );
}