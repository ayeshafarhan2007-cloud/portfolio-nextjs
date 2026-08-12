"use client";

import dynamic from "next/dynamic";

const AIChat = dynamic(() => import("./AIChat"), {
  ssr: false,
  loading: () => <p>Loading AI Assistant...</p>,
});

export default function LazyAIChat() {
  return <AIChat />;
}