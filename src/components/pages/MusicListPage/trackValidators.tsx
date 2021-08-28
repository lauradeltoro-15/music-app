import {
  IsNotEmptyValidator,
  MatchValidator,
  CustomValidator,
} from "../../commonComponents/SearchBar/useValidation/validators";
import { TrackSearchErrorMessage } from "./models";

export const trackValidators = [
  new IsNotEmptyValidator(TrackSearchErrorMessage.IsNotEmpty),
  new MatchValidator(TrackSearchErrorMessage.Match, /^[a-zA-Z0-9 ]*$/),
  new CustomValidator(
    TrackSearchErrorMessage.Custom,
    (value: string) => !value.includes("sadness")
  ),
];
