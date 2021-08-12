import { CardData, CardStyle } from "../Card/models";

export type InfiniteScrollCardListProps = {
  fetchItems: (limit: number, offset: number) => Promise<CardData[]>;
  cardStyle: CardStyle;
};

export type Page = {
  isLoading: boolean;
  items: any[];
};

export type FetchCallback = (pageLimit: number, offset: number) => Promise<any>;