import {
  AuthenticationError,
  AuthorizationError,
  InternalError,
  RateLimitingError,
} from "../../errors";
import { SpotifyErrorHandler } from "../errorHandler";
import { SpotifyAuthenticationError } from "../models";

const spotifyErrorHandler = new SpotifyErrorHandler();

describe("Spotify Error Handler", () => {
  it("should throw an Authorization error with 401 errors", async () => {
    const spotifyAuthorizationError = {
      status: 401,
      message: "Example message",
    };

    expect(() => spotifyErrorHandler.handle(spotifyAuthorizationError)).toThrow(
      new AuthorizationError()
    );
  });

  it("should throw an Rate limiting error with 429 errors", async () => {
    const spotifyRateLimitingError = {
      status: 429,
      message: "Example message",
    };

    expect(() => spotifyErrorHandler.handle(spotifyRateLimitingError)).toThrow(
      new RateLimitingError()
    );
  });

  it("should throw an Internal Server error with unknown errors", async () => {
    const unknownError = {
      status: 1,
      message: "Example message",
    };

    expect(() => spotifyErrorHandler.handle(unknownError)).toThrow(
      new InternalError()
    );
  });

  it("should throw authentication error", async () => {
    const authenticationError = "authentication error";

    expect(() =>
      spotifyErrorHandler.handle(
        authenticationError as SpotifyAuthenticationError
      )
    ).toThrow(new AuthenticationError());
  });
});
