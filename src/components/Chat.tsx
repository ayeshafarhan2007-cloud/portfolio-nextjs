"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
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
            <strong>{message.role === "user" ? "You" : "AI"}:</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask something..."
          style={{
            width: "80%",
            padding: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}