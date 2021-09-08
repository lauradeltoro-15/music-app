import { CardDescription, CardImage, CardTitle, StyledCard } from "./layout";
import { CardProps, CardStyle } from "./models";

export const defaultStyle: CardStyle = {
  width: 300,
  height: 500,
  margin: 15,
  imageHeight: 300,
};

const Card = ({ style, data: { title, children, imageUrl } }: CardProps) => {
  return (
    <StyledCard
      width={style?.width || defaultStyle.width}
      height={style?.height || defaultStyle.height}
      margin={style?.margin || defaultStyle.margin}
      data-testid="card"
    >
      <CardImage
        src={imageUrl}
        height={style?.imageHeight || defaultStyle.imageHeight}
      ></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </StyledCard>
  );
};

export default Card;
