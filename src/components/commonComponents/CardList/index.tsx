import Card from "../Card";
import { CardProps } from "../Card/models";
import { StyledList } from "./layout";
import { CardListProps } from "./models";

const CardList = ({ items }: CardListProps) => {
  const cards = items.map((item: CardProps, i: number) => {
    return <Card key={i} {...item}></Card>;
  });

  return <StyledList>{cards}</StyledList>;
};

export default CardList;
