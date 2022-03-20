import { fireEvent, render, screen } from "@testing-library/react";
import Image from "..";

describe("Testing Image component", () => {
  const imageMockData = {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5616/3744",
  };

  test("on initial render, should have img and Skeleton component rendered", async () => {
    render(<Image image={imageMockData} />);
    const image = screen.getByTestId("image");
    const skeleton = screen.getByTestId("skeleton");
    expect(image).toBeTruthy();
    expect(skeleton).toBeTruthy();
  });

  test("on mouse hover, should show author and like button", () => {
    render(<Image image={imageMockData} />);
    const imageContainer = screen.getByTestId("image-container");
    fireEvent.mouseOver(imageContainer);
    const authorName = screen.getByText(imageMockData.author);
    const likeButton = screen.getByRole("button");
    expect(authorName).toBeTruthy();
    expect(likeButton).toBeTruthy();
  });
});
