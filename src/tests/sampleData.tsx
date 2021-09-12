import { SpotifyTrack } from "../components/pages/MusicListPage/models";

export const testUrl = "https://www.example.com";
export const TestDescription = () => <p>Card Descrition Example</p>;

export const cardStyle = {
  height: 600,
  width: 250,
  imageHeight: 250,
  margin: 10,
};

export const cardData = {
  title: "Card title test",
  children: <TestDescription />,
  imageUrl: testUrl,
};

export const error: Error = {
  name: "Test error",
  message: "Test error message",
};

export const spotifyTrack: SpotifyTrack = {
  album: {
    album_type: "album",
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms",
        },
        href: "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
        id: "1HY2Jd0NmPuamShAr6KMms",
        name: "Lady Gaga",
        type: "artist",
        uri: "spotify:artist:1HY2Jd0NmPuamShAr6KMms",
      },
    ],
    available_markets: ["AE"],
    external_urls: {
      spotify: "https://open.spotify.com/album/6DGZdMi124iOOih9GMlhN2",
    },
    href: "https://api.spotify.com/v1/albums/6DGZdMi124iOOih9GMlhN2",
    id: "6DGZdMi124iOOih9GMlhN2",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bfd247438980173d32fd5ba8",
        width: 640,
      },
    ],
    name: "The Fame Monster (Deluxe Edition)",
    release_date: "2009-08-05",
    release_date_precision: "day",
    total_tracks: 22,
    type: "album",
    uri: "spotify:album:6DGZdMi124iOOih9GMlhN2",
  },
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms",
      },
      href: "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
      id: "1HY2Jd0NmPuamShAr6KMms",
      name: "Lady Gaga",
      type: "artist",
      uri: "spotify:artist:1HY2Jd0NmPuamShAr6KMms",
    },
  ],
  available_markets: ["AE"],
  disc_number: 1,
  duration_ms: 274213,
  explicit: false,
  external_ids: {
    isrc: "USUM70905526",
  },
  external_urls: {
    spotify: "https://open.spotify.com/track/4lwavw59UjXUPJZtKNdFYp",
  },
  href: "https://api.spotify.com/v1/tracks/4lwavw59UjXUPJZtKNdFYp",
  id: "4lwavw59UjXUPJZtKNdFYp",
  is_local: false,
  name: "Alejandro",
  popularity: 61,
  preview_url: "",
  track_number: 2,
  type: "track",
  uri: "spotify:track:4lwavw59UjXUPJZtKNdFYp",
};