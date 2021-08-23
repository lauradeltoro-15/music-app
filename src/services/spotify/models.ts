export type SpotifyRegularError = {
  status: number;
  message: string;
};
export enum SpotifyAuthenticationError {
  InvalidRequest = "invalid_request",
  InvalidClient = "invalid_client",
  InvalidGrant = "invalid_grant",
  UnauthorizedClient = "unauthorized_client",
  UnsupportedGrantType = "unsupported_grant_type",
}

export type SpotifyError = SpotifyAuthenticationError | SpotifyRegularError;