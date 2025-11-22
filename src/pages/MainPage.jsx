import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";

export default function MainPage({ onNavigate }) {
  return (
    <main
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: 28, margin: 8, color: "var(--text)" }}>Welcome</h2>
      <p style={{ color: "var(--muted)", maxWidth: 640, textAlign: "center" }}>
        You are logged in. This is the main page for Price Checker.
      </p>

      <div style={{ marginTop: 18 }}>
        <ProfileCard name="Signed In User" bio="Ready to check prices" />
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => onNavigate("landing")}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "var(--primary)",
            color: "var(--surface)",
          }}
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
