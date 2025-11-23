import { render, screen } from "@testing-library/react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";

describe("When ProfileCard is rendered", () => {
  describe("and an imageSrc is provided", () => {
    const props = {
      name: "Jane Doe",
      bio: "Test bio",
      imageSrc: "/logo192.png",
    };

    it("shows the provided name", () => {
      render(<ProfileCard {...props} />);
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    });

    it("renders an image element as the avatar", () => {
      render(<ProfileCard {...props} />);
      const img = screen.getByRole("img", { name: /avatar of jane doe/i });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "/logo192.png");
    });
  });

  describe("and no imageSrc is provided", () => {
    const props = { name: "Sam", bio: "No image" };

    it("shows the provided name", () => {
      render(<ProfileCard {...props} />);
      expect(screen.getByText(/Sam/i)).toBeInTheDocument();
    });

    it("shows a placeholder avatar with the first initial", () => {
      render(<ProfileCard {...props} />);
      // There should be no image element when imageSrc is empty
      expect(screen.queryByRole("img")).toBeNull();
      // The placeholder contains the initial
      expect(screen.getByText("S")).toBeInTheDocument();
    });
  });
});
