import { ValidationError, Validator, ValidatorType } from "./models";

const getValidationError = (message: string, type: ValidatorType) => ({
  message,
  type,
});

export class IsNotEmptyValidator implements Validator {
  errorMessage: string;

  constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }

  validate = (value: string): ValidationError | null =>
    value.trim() !== ""
      ? null
      : getValidationError(this.errorMessage, ValidatorType.IsNotEmpty);
}

export class MatchValidator implements Validator {
  expression: RegExp;
  errorMessage: string;

  constructor(errorMessage: string, expression: RegExp) {
    this.expression = expression;
    this.errorMessage = errorMessage;
  }

  validate = (value: string): ValidationError | null =>
    value.match(this.expression)
      ? null
      : getValidationError(this.errorMessage, ValidatorType.Match);
}

export class CustomValidator implements Validator {
  isValid: (value: string) => boolean;

  errorMessage: string;

  constructor(errorMessage: string, isValid: (value: string) => boolean) {
    this.isValid = isValid;
    this.errorMessage = errorMessage;
  }

  validate = (value: string): ValidationError | null =>
    this.isValid(value)
      ? null
      : getValidationError(this.errorMessage, ValidatorType.Custom);
}
