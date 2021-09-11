import { Hook, HookWithModalContext, mockUseState } from "./testHelpers";
import useValidation from "../commonComponents/SearchBar/useValidation";
import { IsNotEmptyValidator } from "../commonComponents/SearchBar/useValidation/validators";
import { ValidatorType } from "../commonComponents/SearchBar/useValidation/models";

const message = "Example message";
const validators = [new IsNotEmptyValidator(message)];

const emptyValue = " ";
const noValue = undefined;
const validValue = "Example valid value";

describe("useValidation hook", () => {
  afterEach(() => jest.resetAllMocks());

  it("should not check validation if there is no value provided", () => {
    const mockSetState = mockUseState([]);
    Hook(() => useValidation(validators, noValue));

    expect(mockSetState).not.toHaveBeenCalledTimes(1);
  });

  it("should get errors when value is invalid", () => {
    const mockSetState = mockUseState([]);
    Hook(() => useValidation(validators, emptyValue));

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith([
      {
        message,
        type: ValidatorType.IsNotEmpty,
      },
    ]);
  });
  it("should not get errors when value is valid", () => {
    const mockSetState = mockUseState([]);
    Hook(() => useValidation(validators, validValue));

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith([]);
  });
});
