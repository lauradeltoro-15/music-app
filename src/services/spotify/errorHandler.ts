import { ErrorHandler } from "../../models/ErrorHandler";
import {
  SpotifyError,
  SpotifyRegularError,
} from "./models";
import {
  AuthenticationError,
  AuthorizationError,
  InternalError,
  RateLimitingError,
} from "../errors";

export class SpotifyErrorHandler implements ErrorHandler<SpotifyError> {
  handle(error: SpotifyError) {
    this.isRegularError(error)
      ? this.handleRegularErrors(error as SpotifyRegularError)
      : this.handleAuthenticationError();
  }

  private handleAuthenticationError() {
    throw new AuthenticationError();
  }

  private handleRegularErrors(error: SpotifyRegularError) {
    switch (error.status) {
      case 401:
        throw new AuthorizationError();
      case 429:
        throw new RateLimitingError();
      default:
        throw new InternalError();
    }
  }

  private isRegularError(error: SpotifyError) {
    return typeof error !== "string";
  }
}
