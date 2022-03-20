import { render, screen } from "@testing-library/react";
import BackgroundImage from "..";

describe("Testing BackgroundImage component", () => {
  test("on initial render, should have h2 tag and image rendered", () => {
    render(<BackgroundImage />);
    const h2 = screen.getByText("Randterest");
    const image = screen.getByRole("img");
    expect(h2).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
