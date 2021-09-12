import { TrackCardDescriptionProps } from "./models";

const TrackCardDescription = ({
  artists,
  album,
}: TrackCardDescriptionProps) => {
  return (
    <div data-testid="trackCardDescription">
      <p>Artists: {artists.join(",")} </p>
      <p>Album: {album} </p>
    </div>
  );
};

export default TrackCardDescription;
