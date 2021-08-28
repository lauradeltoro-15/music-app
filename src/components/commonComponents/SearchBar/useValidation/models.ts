export enum ValidatorType {
  IsNotEmpty = "isNotEmpty",
  Match = "match",
  Custom = "custom",
}

export type ValidationError = {
  type: ValidatorType;
  message: string;
};

export interface Validator {
  errorMessage: string;
  validate: (value: string) => ValidationError | null;
}
