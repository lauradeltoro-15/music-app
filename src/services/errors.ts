export class RateLimitingError extends Error {
  constructor() {
    super();
    this.name = "RATE_LIMITING_ERROR";
    this.message = "Rate limiting has been exceeded, try again later.";
  }
}

export class InternalError extends Error {
  constructor() {
    super();
    this.name = "INTERNAL_ERROR";
    this.message =
      "Ooops. Something went wrong. The server encountered an error and couldn't solve your request";
  }
}

export class AuthorizationError extends Error {
  constructor() {
    super();
    this.name = "AUTHORIZATION_ERROR";
    this.message = "You are not allowed to access these resources";
  }
}

export class AuthenticationError extends Error {
  constructor() {
    super();
    this.name = "AUTHENTICATION_ERROR";
    this.message = "Authentication was not successful";
  }
}
