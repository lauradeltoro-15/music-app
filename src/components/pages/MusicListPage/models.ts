export type SpotifySearchByTrackResponse = {
  tracks: {
    href: string;
    items: SpotifyTrack[];
    limit: number;
    next: number;
    offset: number;
    previous: number | null;
    total: number;
  };
};

export type SpotifyTrack = {
  album: {
    album_type: number;
    artists: SpotifyArtist[];
    available_markets: string[];
    external_urls: {
      [index: string]: string;
    };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: {
    [index: string]: string;
  };
  external_urls: {
    [index: string]: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyArtist = {
  name: string;
  [index: string]: any;
};

export type TrackCardDescriptionProps = {
  artists: string[];
  album: string;
};

export enum TrackSearchErrorMessage {
  IsNotEmpty = "The track cannot be empty!",
  Match = "There are some weird characters in your song, only numbers and letters are allowed",
  Custom = "Ouch, we don't like sad songs here :(",
}
