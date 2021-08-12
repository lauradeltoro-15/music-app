import { TrackCardDescriptionProps } from "./models";

const TrackCardDescription = ({
  artists,
  album,
}: TrackCardDescriptionProps) => {
  return (
    <div>
      <p>Artists: {artists.join(",")} </p>
      <p>Album: {album} </p>
    </div>
  );
};

export default TrackCardDescription;
