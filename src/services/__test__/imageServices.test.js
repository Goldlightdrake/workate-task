import * as imageServices from "../imageServices";

describe("Testing imageService", () => {
  const imagesMockData = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5616/3744",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5616/3744",
    },
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: "https://picsum.photos/id/10/2500/1667",
    },
  ];

  beforeEach(() => {
    jest
      .spyOn(imageServices, "getImagesList")
      .mockResolvedValue(imagesMockData);
  });

  test("when getImagesList is called, should return array with 3 image objects", async () => {
    const images = await imageServices.getImagesList();
    expect(images).toHaveLength(3);
  });
});
