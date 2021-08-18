import Card from "../Card";
import { CardData } from "../Card/models";
import Spinner from "../Spinner";
import { StyledList } from "./layout";
import { CardListProps } from "./models";

const CardList = ({ items, cardStyle, isLoading }: CardListProps) => {
  const cards = items.map((item: CardData, i: number) => {
    return <Card key={i} data={item} style={cardStyle}></Card>;
  });
  return isLoading && !cards.length ? (
    <Spinner />
  ) : (
    <StyledList>{cards}</StyledList>
  );
};

export default CardList;
