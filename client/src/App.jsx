import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
  const [route, setRoute] = useState("landing");

  function handleNavigate(next) {
    setRoute(next);
  }

  return (
    <div className="App">
      {route === "landing" && <LandingPage onNavigate={handleNavigate} />}
      {route === "login" && <LoginPage onNavigate={handleNavigate} />}
      {route === "main" && <MainPage onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
