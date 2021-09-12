import MusicListPage, { DEFAULT_IMAGE } from "..";
import { render, screen, within } from "@testing-library/react";
import { WithModalContext, WithTheme } from "../../../../tests/helpers";
import "@testing-library/jest-dom/extend-expect";
import { SpotifyService } from "../../../../services/spotify";
import { spotifyTrack } from "../../../../tests/sampleData";

jest.mock("../../../../services/spotify");
const mockSearchByTrackName = jest.fn();

const spotifyTrackWithNoImage = {
  ...spotifyTrack,
  album: { ...spotifyTrack.album, images: [] },
};

describe("Musiclist Page", () => {
  beforeEach(() => {
    mockSearchByTrackName.mockImplementation(
      (_name: string, _limit: number, _offset: number) => ({
        tracks: {
          items: [spotifyTrack, spotifyTrackWithNoImage],
        },
      })
    );
    (SpotifyService as jest.Mock).mockImplementation(() => {
      return {
        searchByTrackName: mockSearchByTrackName,
      };
    });
    render(WithTheme(WithModalContext(<MusicListPage />)));
  });

  it("should display cards with tracks", () => {
    expect(mockSearchByTrackName).toHaveBeenCalled();
    expect(screen.getAllByTestId("card")).toHaveLength(2);
    expect(screen.getAllByText(spotifyTrack.name)[0]).toBeInTheDocument();
  });

  it("should display card descriptions", () => {
    const trackDescription = screen.getAllByTestId("trackCardDescription")[0];
    expect(trackDescription).toBeInTheDocument();
    expect(
      within(trackDescription).getByText(`Album: ${spotifyTrack.album.name}`)
    ).toBeInTheDocument();
    expect(
      within(trackDescription).getByText(
        `Artists: ${spotifyTrack.artists[0].name}`
      )
    ).toBeInTheDocument();
  });

  it("should display a searchbar", () => {
    const searchbar = screen.getByRole("textbox");
    expect(searchbar).toBeInTheDocument();
  });

  it("should display default image if a track has no images", () => {
    const defaultImage = screen.getAllByRole("img")[1];
    expect(defaultImage).toHaveAttribute("src", DEFAULT_IMAGE);
  });
});
