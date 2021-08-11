import { CardDescription, CardImage, CardTitle, StyledCard } from "./layout";
import { CardProps } from "./models";

const Card = ({ style, data: { title, children, imageUrl } }: CardProps) => {
  return (
    <StyledCard
      width={style?.width || 300}
      height={style?.height || 500}
      margin={style?.margin || 15}
    >
      <CardImage src={imageUrl} height={style?.imageHeight || 300}></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </StyledCard>
  );
};

export default Card;
