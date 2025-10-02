import React, { useState } from "react";
import "../Style/Lock.css";

export default function PasswordEntryPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  // 🔑 Change this to your hardcore password
  const HARDCORE_PASSWORD = "Brington@123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === HARDCORE_PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  if (unlocked) {
    return (
      <div className="unlock-screen">
        <h1>✅ Access Granted</h1>
        <p>Welcome to the protected area!</p>
      </div>
    );
  }

  return (
    <div className="password-wrapper">
      <form className="password-card" onSubmit={handleSubmit}>
        <h2>Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter hardcore password"
          required
        />
        <button type="submit">Unlock</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
