import Service from "../models/Service";

export class SpotifyService implements Service {
  baseUrl = "https://api.spotify.com/v1";
  authorizationUrl = "https://accounts.spotify.com/api/token";

  async searchByTrackName(name: string) {
    const options = {
      headers: {
        Authorization: await this.getBearerAuthorization(),
      },
    };
    try {
      const response = await fetch(this.getSearchBySongUrl(name), options);
      return response.json();
    } catch (error) {
      console.log("Error searching by song name:", error);
    }
  }

  private getSearchBySongUrl(name: string) {
    return `${this.baseUrl}/search?q=${name}&type=track`;
  }

  private async getBearerAuthorization() {
    const authorization = await this.getAuthorization();

    return `Bearer ${authorization.access_token}`;
  }

  private async getAuthorization() {
    try {
      const response = await fetch(
        this.authorizationUrl,
        this.getAuthorizationRequestOptions()
      );
      return response.json();
    } catch (error) {
      console.log("Error getting access token: ", error);
    }
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
}
