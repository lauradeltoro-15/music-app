import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { StyledSearchBar, StyledSearchBarContainer } from "./layout";

const SearchBar = ({ onChange }: any) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <StyledSearchBarContainer>
      <StyledSearchBar
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        value={searchValue}
      />
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
