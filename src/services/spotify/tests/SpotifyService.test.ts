import { SpotifyService } from "..";
import { SpotifyErrorHandler } from "../errorHandler";

const mockHandle = jest.fn();
const spotifyService = new SpotifyService();
global.fetch = jest.fn();
jest.mock("../errorHandler.ts");
const noName = "";
const validName = "Example";

describe("Spotify service", () => {
  beforeAll(() => {
    (SpotifyErrorHandler as jest.Mock).mockImplementation(() => {
      return {
        handle: mockHandle,
      };
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should not return items when no name is provided", async () => {
    const spotifyResponse = await spotifyService.searchByTrackName(noName);

    expect(spotifyResponse).toStrictEqual({ tracks: { items: [] } });
  });

  it("should return response when it is valid", async () => {
    const successfullJsonResponse = { value: true };
    const successResponse = Promise.resolve({
      json: () => successfullJsonResponse,
    });
    (global.fetch as jest.Mock).mockReturnValue(
      Promise.resolve(successResponse)
    );

    const response = await spotifyService.searchByTrackName(validName);

    expect(response).toStrictEqual(successfullJsonResponse);
  });
  it("should throw an error when the response is not valid", async () => {
    const successfullJsonResponse = { value: true };
    const successResponse = Promise.resolve({
      json: () => successfullJsonResponse,
    });
    const errorJsonResponse = { error: { status: "" } };
    const failingResponse = Promise.resolve({
      json: () => errorJsonResponse,
    });
    (global.fetch as jest.Mock)
      .mockReturnValueOnce(successResponse)
      .mockReturnValue(Promise.resolve(failingResponse));

    spotifyService.searchByTrackName(validName).catch(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(mockHandle).toHaveBeenCalled();
    });
  });
});
