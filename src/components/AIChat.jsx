"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function AIChat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const exampleQuestions = [
    "Which project best demonstrates React?",
    "Which project is most relevant to AI development?",
    "What frontend skills does Ayesha have?",
  ];

  function handleQuestion(question) {
    sendMessage({
      text: question,
    });
  }

  return (
    <section
      aria-labelledby="ai-explorer-heading"
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "16px",
        background: "#fafafa",
      }}
    >
      {/* Introduction */}
      <div style={{ marginBottom: "24px" }}>
        <h2
          id="ai-explorer-heading"
          style={{ marginBottom: "8px" }}
        >
          🤖 AI Portfolio Explorer
        </h2>

        <p
          style={{
            margin: 0,
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Not sure where to start? Tell me what you're looking for.
          I'll recommend the most relevant projects and skills from
          Ayesha's portfolio.
        </p>
      </div>

      {/* Example questions */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Try asking:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {exampleQuestions.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => handleQuestion(question)}
              disabled={status !== "ready"}
              style={{
                padding: "10px 14px",
                textAlign: "left",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "white",
                cursor: "pointer",
              }}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div
          role="alert"
          style={{
            marginBottom: "20px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "#fff",
          }}
        >
          <strong>
            ⚠️ AI Explorer temporarily unavailable
          </strong>

          <p style={{ marginBottom: 0 }}>
            The AI service is currently unavailable. You can still
            browse Ayesha's projects and skills below.
          </p>
        </div>
      )}

      {/* Conversation */}
      <div
        aria-live="polite"
        aria-label="AI conversation"
        style={{ marginBottom: "20px" }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: "16px",
              padding: "12px",
              borderRadius: "8px",
              background:
                message.role === "user" ? "#eee" : "#fff",
              border: "1px solid #ddd",
            }}
          >
            <strong>
              {message.role === "user" ? "You:" : "AI:"}
            </strong>

            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <p
                  key={index}
                  style={{ marginBottom: 0 }}
                >
                  {part.text}
                </p>
              ) : null
            )}
          </div>
        ))}
      </div>

      {/* Input form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const input = e.target.message.value.trim();

          if (!input) {
            return;
          }

          sendMessage({
            text: input,
          });

          e.target.message.value = "";
        }}
      >
        <label
          htmlFor="ai-question"
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
          }}
        >
          Ask about Ayesha's portfolio
        </label>

        <input
          id="ai-question"
          name="message"
          type="text"
          placeholder="What are you looking for?"
          aria-describedby="ai-question-help"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        />

        <p
          id="ai-question-help"
          style={{
            marginTop: "6px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Example: Ask which project demonstrates React or AI
          development.
        </p>

        <button
          type="submit"
          disabled={status !== "ready"}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {status === "streaming" ? "Thinking..." : "Explore"}
        </button>
      </form>
    </section>
  );
}