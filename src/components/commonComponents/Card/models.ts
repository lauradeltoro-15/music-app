export type CardProps = {
  data: CardData;
  style?: CardStyle;
};

export type CardData = {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
};

export type CardStyle = {
  height: number;
  width: number;
  imageHeight: number;
  margin: number;
};

export type StyledCardProps = {
  height: number;
  width: number;
  margin: number;
};

export type StyledCardImageProps = {
  height: number;
};
