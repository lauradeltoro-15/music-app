import { CardData, CardStyle } from "../Card/models";

export type InfiniteScrollCardListProps = {
  fetchItems: (limit: number, offset: number) => Promise<CardData[]>;
  cardStyle: CardStyle;
};

export type Page<T> = {
  isLoading: boolean;
  items: T[];
};

export type FetchCallback<T> = (pageLimit: number, offset: number) => Promise<T[]>;