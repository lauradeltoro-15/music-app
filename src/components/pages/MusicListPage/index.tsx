import { useState, useEffect } from "react";
import { SpotifyService } from "../../../services/spotifyService";
import { CardProps } from "../../commonComponents/Card/models";

import CardList from "../../commonComponents/CardList";
import TrackCardDescription from "./TrackCardDescription";

const MusciListPage = () => {
  const [songs, setSongs] = useState<null | CardProps[]>(null);

  const mapSongsToCards = (response: any) => {
    return response.tracks.items.map((track: any) => ({
      title: track.name,
      children: (
        <TrackCardDescription
          album={track.album.name}
          artists={track.artists.map(({ name }: any) => name)}
        />
      ),
      imageUrl: track.href,
    }));
  };

  useEffect(() => {
    const spotifyService = new SpotifyService();

    const getTrackByName = async () => {
      const response = await spotifyService.searchByTrackName("life");

      setSongs(mapSongsToCards(response));
    };

    getTrackByName();
  }, []);

  return songs ? (
    <main>
      <CardList items={songs} />
    </main>
  ) : (
    <p>loading...</p>
  );
};

export default MusciListPage;
