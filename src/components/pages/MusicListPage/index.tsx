import { SpotifyService } from "../../../services/spotifyService";

import InfiniteScrollCardList from "../../commonComponents/InfiniteScrollCardList";
import TrackCardDescription from "./TrackCardDescription";

const DEFAULT_IMAGE = "https://source.unsplash.com/FZWivbri0Xk/400x400";

const MusicListPage = () => {
  const spotifyService = new SpotifyService();

  const mapTracksToCardData = (response: any) => {
    return response.tracks.items.map((track: any) => ({
      title: track.name,
      children: (
        <TrackCardDescription
          album={track.album.name}
          artists={track.artists.map(({ name }: any) => name)}
        />
      ),
      imageUrl: track.album.images[0]?.url || DEFAULT_IMAGE,
    }));
  };

  const fetchTracks = async (limit: number, offset: number) => {
    const response = await spotifyService.searchByTrackName(
      "happy",
      limit,
      offset
    );
    return mapTracksToCardData(response);
  };
  return (
    <main>
      <InfiniteScrollCardList
        fetchItems={fetchTracks}
        cardStyle={{
          height: 500,
          width: 300,
          imageHeight: 300,
          margin: 15,
        }}
      />
    </main>
  );
};

export default MusicListPage;
