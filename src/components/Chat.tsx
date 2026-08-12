"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h2>AI Chat</h2>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          minHeight: "300px",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: "15px" }}>
            <strong>
              {message.role === "user" ? "You" : "AI"}:
            </strong>

            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <p key={index}>{part.text}</p>
              ) : null
            )}
          </div>
        ))}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const form = event.currentTarget;
          const input = form.elements.namedItem("message") as HTMLInputElement;
          const text = input.value.trim();

          if (!text) return;

          sendMessage({ text });
          input.value = "";
        }}
      >
        <input
          name="message"
          placeholder="Ask something..."
          aria-label="Ask something"
          style={{
            width: "80%",
            padding: "10px",
          }}
        />

        <button
          type="submit"
          disabled={status !== "ready"}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
          }}
        >
          {status === "streaming" ? "Thinking..." : "Send"}
        </button>
      </form>
    </div>
  );
}