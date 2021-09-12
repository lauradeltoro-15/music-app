import { Service } from "../../models/Service";
import { SpotifyErrorHandler } from "./errorHandler";
import { SpotifyError } from "./models";

export class SpotifyService implements Service<SpotifyError> {
  baseUrl = "https://api.spotify.com/v1";
  authorizationUrl = "https://accounts.spotify.com/api/token";
  errorHandler = new SpotifyErrorHandler();

  async searchByTrackName(name: string, limit = 20, offset = 0) {
    try {
      if (!name) return Promise.resolve({ tracks: { items: [] } });
      const options = {
        headers: {
          Authorization: await this.getBearerToken(),
        },
      };
      const response = await fetch(
        this.getSearchByTrackUrl(name, limit, offset),
        options
      );

      return this.validatedResponse(await response.json());
    } catch (error) {
      this.errorHandler.handle(error);
    }
  }

  private getSearchByTrackUrl(name: string, limit: number, offset: number) {
    return `${this.baseUrl}/search?q=${name}&type=track&limit=${limit}&offset=${offset}`;
  }

  private async getBearerToken() {
    const authorization = await this.getAuthorization();

    return `Bearer ${authorization.access_token}`;
  }

  private async getAuthorization() {
    const response = await fetch(
      this.authorizationUrl,
      this.getAuthorizationRequestOptions()
    );
    return this.validatedResponse(await response.json());
  }

  private getAuthorizationRequestOptions() {
    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");

    return {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${window.btoa(
          unescape(
            encodeURIComponent(
              `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
            )
          )
        )}`,
      },
      body,
    };
  }

  private validatedResponse(response: any) {
    if (response.error) throw response.error;

    return response;
  }
}
