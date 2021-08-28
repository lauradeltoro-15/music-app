import { useEffect } from "react";
import { useState } from "react";
import { ValidationError, Validator } from "./models";

const getErrorsFromValidators = (validators: Validator[], value: string) =>
  validators.reduce((errors, validator) => {
    const error = validator.validate(value);
    error && errors.push(error);
    return errors;
  }, [] as ValidationError[]);

const useValidation = (
  validators: Validator[],
  value?: string
): ValidationError[] => {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  useEffect(() => {
    if (!value) return;

    setErrors(getErrorsFromValidators(validators, value));
  }, [value]);

  return errors;
};

export default useValidation;
