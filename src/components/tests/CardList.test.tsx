import CardList from "../commonComponents/CardList";
import { render, screen } from "@testing-library/react";
import { WithTheme } from "./testHelpers";
import "@testing-library/jest-dom/extend-expect";
import { CardListProps } from "../commonComponents/CardList/models";
import { cardStyle, cardData } from "./testSampleData";

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

describe("CardList Component", () => {
  it("should render a spinner if it is loading and has no items", () => {
    render(WithTheme(<CardList {...loadingEmptyCardList} />));

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should render the items when it is loading and has items", () => {
    render(WithTheme(<CardList {...loadingWithItemsCardList} />));

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getAllByTestId("card")).toHaveLength(1);
  });

  it("should render the items when it is loaded", () => {
    render(WithTheme(<CardList {...loadedCardList} />));

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getAllByTestId("card")).toHaveLength(1);
  });
});
