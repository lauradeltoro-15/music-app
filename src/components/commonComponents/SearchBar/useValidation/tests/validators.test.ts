import { ValidatorType } from "../models";
import * as validators from "../validators";

const errorMessage = "Example error message";

describe("IsNotEmptyValidator", () => {
  const isNotEmptyValidator = new validators.IsNotEmptyValidator(errorMessage);
  const emptyValue = " ";
  const notEmptyValue = "Example value";
  it("should return an error if the value is empty", () => {
    const error = isNotEmptyValidator.validate(emptyValue);

    expect(error).toStrictEqual({
      message: errorMessage,
      type: ValidatorType.IsNotEmpty,
    });
  });

  it("should return null if the value is not empty", () => {
    const error = isNotEmptyValidator.validate(notEmptyValue);

    expect(error).toBeNull();
  });
});
describe("MatchValidator", () => {
  const matchValidator = new validators.MatchValidator(
    errorMessage,
    /^[a-z]+$/
  );
  const notMatchingValue = "EXAMPLE";
  const matchingValue = "example";

  it("should return an error if the value does not match expression", () => {
    const error = matchValidator.validate(notMatchingValue);

    expect(error).toStrictEqual({
      message: errorMessage,
      type: ValidatorType.Match,
    });
  });
  it("should return null if the value matches expression", () => {
    const error = matchValidator.validate(matchingValue);

    expect(error).toBeNull();
  });
});
describe("CustomValidator", () => {
  const isTooLong = (value: string) => value.length < 5;

  const matchValidator = new validators.CustomValidator(
    errorMessage,
    isTooLong
  );
  const longValue = "12345";
  const shortValue = "123";

  it("should return an error if the value does not pass the custom validation", () => {
    const error = matchValidator.validate(longValue);

    expect(error).toStrictEqual({
      message: errorMessage,
      type: ValidatorType.Custom,
    });
  });
  it("should return null if the value passes the custom validation", () => {
    const error = matchValidator.validate(shortValue);

    expect(error).toBeNull();
  });
});
