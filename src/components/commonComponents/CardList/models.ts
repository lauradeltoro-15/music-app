import { CardData, CardStyle } from "../Card/models";

export type CardListProps = {
  items: CardData[];
  cardStyle: CardStyle;
  isLoading: boolean;
};
