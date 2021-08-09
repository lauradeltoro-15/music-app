import { CardDescription, CardImage, CardTitle, StyledCard } from "./layout";
import { CardProps } from "./models";

const Card = ({
  title,
  children,
  height = 300,
  width = 300,
  imageUrl,
}: CardProps) => {
  return (
    <StyledCard width={width} height={height}>
      <CardImage src={imageUrl} height={height}></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </StyledCard>
  );
};

export default Card;
