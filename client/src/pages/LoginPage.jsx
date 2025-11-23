import React from "react";
import Form from "../components/LoginForm/LoginForm.jsx";

export default function LoginPage({ onNavigate }) {
  return (
    <main
      style={{
        padding: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Form
        onSuccess={() => onNavigate("main")}
        onBack={() => onNavigate("landing")}
      />
    </main>
  );
}
