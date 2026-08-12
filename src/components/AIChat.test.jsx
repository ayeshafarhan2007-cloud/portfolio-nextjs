/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it, vi } from "vitest";
import AIChat from "./AIChat";

const mockUseChat = vi.fn();

vi.mock("@ai-sdk/react", () => ({
  useChat: () => mockUseChat(),
}));

vi.mock("ai", () => ({
  DefaultChatTransport: vi.fn(),
}));

describe("AI Portfolio Explorer", () => {
  it("renders the main heading and example questions", () => {
    mockUseChat.mockReturnValue({
      messages: [],
      sendMessage: vi.fn(),
      status: "ready",
      error: undefined,
    });

    render(<AIChat />);

    expect(
      screen.getByRole("heading", {
        name: /AI Portfolio Explorer/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Which project best demonstrates React/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Which project is most relevant to AI development/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /What frontend skills does Ayesha have/i,
      })
    ).toBeInTheDocument();
  });

  it("shows a helpful error message when the AI service fails", () => {
    mockUseChat.mockReturnValue({
      messages: [],
      sendMessage: vi.fn(),
      status: "ready",
      error: new Error("AI service unavailable"),
    });

    render(<AIChat />);

    expect(
      screen.getByRole("alert")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/AI Explorer temporarily unavailable/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /The AI service is currently unavailable/i
      )
    ).toBeInTheDocument();
  });
});