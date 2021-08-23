import { useEffect } from "react";
import CardList from "../CardList";
import usePagination from "./usePagination";
import { InfiniteScrollCardListProps } from "./models";

const OFFSET_FOR_BROWSER_COMPATIBILITY = 5;

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

  const { isLoading, items, addNextPage, getFirstPage } = usePagination(
    fetchItems,
    getPageLimit()
  );

  useEffect(() => {
    getFirstPage();
  }, [fetchItems]);

  useEffect(() => {
    if (isLoading) return;

    const onScrolling = () => {
      const isPageEnd =
        window.innerHeight +
          window.scrollY +
          OFFSET_FOR_BROWSER_COMPATIBILITY >=
        document.body.offsetHeight;

      if (isPageEnd) {
        addNextPage();
      }
    };

    document.addEventListener("scroll", onScrolling);
    return () => {
      document.removeEventListener("scroll", onScrolling);
    };
  }, [isLoading]);

  return <CardList items={items} cardStyle={cardStyle} isLoading={isLoading} />;
};

export default InfiniteScrollCardList;
