import { useState, useCallback } from "react";
import { SpotifyService } from "../../../services/spotify";
import InfiniteScrollCardList from "../../commonComponents/InfiniteScrollCardList";
import SearchBar from "../../commonComponents/SearchBar";

import {
  SpotifyArtist,
  SpotifySearchByTrackResponse,
  SpotifyTrack,
} from "./models";
import TrackCardDescription from "./TrackCardDescription";

const DEFAULT_IMAGE = "https://source.unsplash.com/FZWivbri0Xk/400x400";

const MusicListPage = () => {
  const spotifyService = new SpotifyService();
  const [trackSearchQuery, setTrackSearchQuery] = useState("");

  const mapTracksToCardData = (response: SpotifySearchByTrackResponse) => {
    return response.tracks.items.map((track: SpotifyTrack) => ({
      title: track.name,
      children: (
        <TrackCardDescription
          album={track.album.name}
          artists={track.artists.map(({ name }: SpotifyArtist) => name)}
        />
      ),
      imageUrl: track.album.images[0]?.url || DEFAULT_IMAGE,
    }));
  };

  const fetchTracks = useCallback(
    async (limit: number, offset: number) => {
      const response = await spotifyService.searchByTrackName(
        trackSearchQuery,
        limit,
        offset
      );
      return mapTracksToCardData(response);
    },
    [trackSearchQuery]
  );

  return (
    <main>
      <SearchBar onChange={setTrackSearchQuery} />
      {trackSearchQuery.length ? (
        <InfiniteScrollCardList
          fetchItems={fetchTracks}
          cardStyle={{
            height: 500,
            width: 300,
            imageHeight: 300,
            margin: 15,
          }}
        />
      ) : null}
    </main>
  );
};

export default MusicListPage;
