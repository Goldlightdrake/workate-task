import { render, screen } from "@testing-library/react";
import MainPage from "..";

describe("Testing MainPage component", () => {
  test("on initial render, should contain BackgroundImage and ImageGrid components", () => {
    render(<MainPage />);

    const BackgroundImageElement = screen.getByTestId(
      "background-image-section"
    );
    const ImageGridElement = screen.getByTestId("image-grid-section");
    expect(BackgroundImageElement).toBeTruthy();
    expect(ImageGridElement).toBeTruthy();
  });
});
