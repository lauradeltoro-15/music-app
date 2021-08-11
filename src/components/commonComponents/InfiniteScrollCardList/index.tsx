import { useEffect } from "react";
import CardList from "../CardList";
import { CardData, CardStyle } from "../Card/models";
import usePagination from "./usePagination";

const OFFSET_FOR_BROWSER_COMPATIBILITY = 5;

type InfiniteScrollCardListProps = {
  fetchItems: (limit: number, offset: number) => Promise<CardData[]>;
  cardStyle: CardStyle;
};

const InfiniteScrollCardList = ({
  fetchItems,
  cardStyle,
}: InfiniteScrollCardListProps) => {
  const getPageLimit = () => {
    const cardWidthWithMargin = cardStyle.width + cardStyle.margin * 2;
    const cardHeightWithMargin = cardStyle.height + cardStyle.margin * 2;
    const cardsPerRow = Math.floor(window.innerWidth / cardWidthWithMargin);
    const cardsPerColumn = Math.ceil(window.innerHeight / cardHeightWithMargin);
    return cardsPerRow * cardsPerColumn;
  };

  const { isLoading, items, getNextPage } = usePagination(
    fetchItems,
    getPageLimit()
  );

  useEffect(() => {
    getNextPage();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const onScrolling = () => {
      const isPageEnd =
        window.innerHeight +
          window.scrollY +
          OFFSET_FOR_BROWSER_COMPATIBILITY >=
        document.body.offsetHeight;

      if (isPageEnd) {
        getNextPage();
      }
    };

    document.addEventListener("scroll", onScrolling);
    return () => {
      document.removeEventListener("scroll", onScrolling);
    };
  }, [isLoading]);

  return <CardList items={items} cardStyle={cardStyle} />;
};

export default InfiniteScrollCardList;
