import { ErrorHandler } from "../../models/ErrorHandler";
import {
  AuthenticationError,
  AuthorizationError,
  InternalError,
  RateLimitingError,
} from "../errors";

export class SpotifyErrorHandler implements ErrorHandler {
  handle(error: any) {
    const isRegularError = error.status;

    isRegularError
      ? this.handleRegularErrors(error)
      : this.handleAuthenticationError();
  }

  private handleAuthenticationError() {
    throw new AuthenticationError();
  }

  private handleRegularErrors(error: any) {
    switch (error.status) {
      case 401:
        throw new AuthorizationError();
      case 429:
        throw new RateLimitingError();
      default:
        throw new InternalError();
    }
  }
}
