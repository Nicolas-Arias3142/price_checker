import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

describe("Login flow (system)", () => {
  it("navigates from Landing -> Login -> Main when submitting valid credentials", async () => {
    render(<App />);

    // Landing page should be visible
    expect(
      screen.getByRole("heading", { name: /price checker/i })
    ).toBeInTheDocument();

    // Click the landing Login button
    const landingLogin = screen.getByRole("button", { name: /login/i });
    userEvent.click(landingLogin);

    // Wait for the login form to appear (email input)
    const emailInput = await screen.findByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Fill with valid fake data
    userEvent.type(emailInput, "test@example.com");
    userEvent.type(passwordInput, "P@ssword1");

    // Submit the form by clicking the Login button (use Testing Library queries)
    const loginBtn = await screen.findByRole("button", { name: /login/i });
    userEvent.click(loginBtn);

    // Assert we arrived at the Main page
    const welcomeHeading = await screen.findByRole("heading", {
      name: /welcome/i,
    });
    expect(welcomeHeading).toBeInTheDocument();
    expect(screen.getByText(/you are logged in/i)).toBeInTheDocument();
  });
});
