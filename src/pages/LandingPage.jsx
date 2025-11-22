import React from "react";

export default function LandingPage({ onNavigate }) {
  return (
    <main
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <h2 style={{ fontSize: 36, margin: 12 }}>Price Checker</h2>
      <p style={{ maxWidth: 560, textAlign: "center", color: "var(--muted)" }}>
        A tiny app to check product prices. Sign in to continue.
      </p>
      <div style={{ marginTop: 18 }}>
        <button
          onClick={() => onNavigate("login")}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            border: "none",
            background: "var(--primary)",
            color: "var(--surface)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
