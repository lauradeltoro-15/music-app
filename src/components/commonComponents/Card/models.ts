export interface CardProps {
  title: string;
  children: React.ReactNode;
  height?: number;
  width?: number;
  imageUrl: string;
}

export interface StyledCardProps {
  height: number;
  width: number;
}
