import mockAxios from "@/__mocks__/axios";
import Service from "@/service/service";

it("Test services", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
      ]
    })
  );

  // non support d'AWAIT par jest ??
  // const images = await Service();

  // console.log("images", images);

  // work
  Service()
    .then(res => res[0])
    .then(data => {
      console.log("test result", data);
      expect(data.length).toEqual(1);
      // expect(data.albumId.id).toEqual(1);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});
