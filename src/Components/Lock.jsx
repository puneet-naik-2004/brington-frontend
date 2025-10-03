import React, { useState } from "react";
import "../Style/Lock.css";

export default function Lock({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HARDCORE_PASSWORD = "Puneet@123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === HARDCORE_PASSWORD) {
      onUnlock();  // ✅ Tell App we’re unlocked
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

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
