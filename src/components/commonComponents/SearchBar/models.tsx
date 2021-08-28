import { Validator } from "./useValidation/models";

export type StyledSearchBarProps = {
  hasErrors: boolean;
};

export type SearchBarProps = {
  onChange: (debouncedSearchValue: string) => void;
  validators: Validator[];
};