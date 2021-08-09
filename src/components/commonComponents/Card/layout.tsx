import styled from "styled-components";
import { StyledCardProps } from "./models";

export const StyledCard = styled.article<StyledCardProps>`
  width: ${({ width }) => `${width}px`};
  display: flex;
  flex-direction: column;
  border: ${({ theme: { colors } }) => `1px solid ${colors.ui2}`};
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight.bold}`};
  color: ${({ theme: { colors } }) => `1px solid ${colors.ui1}`};
`;

export const CardDescription = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  font-weight: ${({ theme: { fontWeight } }) => `${fontWeight.thin}`};
  color: ${({ theme: { colors } }) => `1px solid ${colors.ui2}`};
`;

export const CardImage = styled.img<any>`
  height: ${({ height }) => `${height}px`};
  object-fit: cover;
`;
