import styled from "styled-components";
import { StyledSearchBarProps } from "./models";

export const StyledSearchBar = styled.input<StyledSearchBarProps>`
  width: 100%;
  max-width: 500px;
  height: 30px;
  border: ${({ theme: { colors }, hasErrors }) =>
    `1px solid ${hasErrors ? colors.error : colors.ui2}`};
`;

export const StyledSearchBarContainer = styled.div`
  padding: ${({ theme: { distances } }) => distances.small};
  margin: ${({ theme: { distances } }) => distances.extraLarge};
  display: flex;
  flex-direction: column;
`;

export const StyledErrorMessage = styled.p`
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  color: ${({ theme: { colors } }) => colors.error};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  margin-bottom: ${({ theme: { distances } }) => `${distances.small} 0`};
`;
