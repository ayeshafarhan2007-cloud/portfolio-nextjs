"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function AIChat() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h2>🤖 AI Portfolio Assistant</h2>

      <p>
        Ask me about Ayesha's projects, skills, and experience.
      </p>

      {messages.map((message) => (
        <div key={message.id}>
          <strong>
            {message.role === "user" ? "You:" : "AI:"}
          </strong>

          {message.parts.map((part, index) =>
            part.type === "text" ? (
              <p key={index}>{part.text}</p>
            ) : null
          )}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const input = e.target.message.value;

          console.log("Sending:", input);

sendMessage({
  text: input,
});

          e.target.message.value = "";
        }}
      >
        <input
          name="message"
          placeholder="Ask about my projects..."
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
          }}
          disabled={status === "streaming"}
        >
          {status === "streaming" ? "Thinking..." : "Send"}
        </button>
      </form>
    </div>
  );
}