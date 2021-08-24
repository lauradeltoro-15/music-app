import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: ${({ theme: { distances } }) => distances.small};
  margin: ${({ theme: { distances } }) => distances.extraLarge};
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
