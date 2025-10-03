import React, { useState } from "react";
import "../Style/Openai.css"; // for styles

export default function ChatAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);

    // Dummy AI reply (replace with API call later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "🤖 AI Reply: " + input }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-button" onClick={toggleChat}>
        Chat with AI
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>AI Chat</span>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={m.role}>
                <b>{m.role === "user" ? "You: " : "AI: "}</b>
                {m.content}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
