import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import useValidation from "./useValidation";
import {
  StyledErrorMessage,
  StyledSearchBar,
  StyledSearchBarContainer,
} from "./layout";
import { SearchBarProps } from "./models";


const SearchBar = ({ onChange, validators }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue);
  const errors = useValidation(validators, searchValue);

  useEffect(() => {
    if (errors.length) return;
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <StyledSearchBarContainer>
      <StyledSearchBar
        hasErrors={errors.length > 0}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        value={searchValue}
      />
      {errors.map((error, i) => (
        <StyledErrorMessage key={i}>{error.message}</StyledErrorMessage>
      ))}
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
