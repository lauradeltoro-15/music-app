import CardList from "..";
import { render, screen } from "@testing-library/react";
import { WithTheme } from "../../../../tests/helpers";
import { CardListProps } from "../models";
import { cardStyle, cardData } from "../../../../tests/sampleData";

const loadingEmptyCardList: CardListProps = {
  isLoading: true,
  items: [],
  cardStyle,
};

const loadingWithItemsCardList: CardListProps = {
  isLoading: true,
  items: [cardData],
  cardStyle,
};

const loadedCardList: CardListProps = {
  isLoading: false,
  items: [cardData],
  cardStyle,
};

const renderCardList = (props: CardListProps) =>
  render(WithTheme(<CardList {...props} />));

describe("CardList Component", () => {
  it("should render a spinner if it is loading and has no items", () => {
    renderCardList(loadingEmptyCardList);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should render the items when it is loading and has items", () => {
    renderCardList(loadingWithItemsCardList);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getAllByTestId("card")).toHaveLength(1);
  });

  it("should render the items when it is loaded", () => {
    renderCardList(loadedCardList);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getAllByTestId("card")).toHaveLength(1);
  });
});
