import Searchbar from "..";
import { fireEvent, render, screen } from "@testing-library/react";
import { WithTheme } from "../../../../tests/helpers";
import { IsNotEmptyValidator } from "../useValidation/validators";
import useDebounce from "../useDebounce";
import useValidation from "../useValidation";
import { Validator, ValidatorType } from "../useValidation/models";

const onChange = jest.fn();
const message = "Example message";
const validators = [new IsNotEmptyValidator(message)];
const validValue = "valid value";
const error = {
  message: "Example error message",
  type: ValidatorType.IsNotEmpty,
};

jest.mock("../useDebounce.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn((value: string) => value),
  };
});
jest.mock("../useValidation", () => {
  return {
    __esModule: true,
    default: jest.fn((_validators: Validator[], _value?: string) => []),
  };
});

describe("Searchbar Component", () => {

  it("should display an empty searchbar", () => {
    render(
      WithTheme(<Searchbar validators={validators} onChange={onChange} />)
    );

    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveValue("");
  });

  it("should call onchange when no errors", () => {
    render(
      WithTheme(<Searchbar validators={validators} onChange={onChange} />)
    );
    const textbox = screen.getByRole("textbox");

    fireEvent.change(textbox, { target: { value: validValue } });

    expect(onChange).toHaveBeenCalledWith(validValue);
  });

  it("should not call onChange when there is an error", () => {
    (useValidation as jest.Mock).mockReturnValueOnce([error]);
    render(
      WithTheme(<Searchbar validators={validators} onChange={onChange} />)
    );

    expect(onChange).not.toHaveBeenCalled();
  });
  it("should show an error message when there is an error", () => {
    (useValidation as jest.Mock).mockReturnValueOnce([error]);
    render(
      WithTheme(<Searchbar validators={validators} onChange={onChange} />)
    );
    const errorMessage = screen.getByText(error.message);

    expect(errorMessage).toBeInTheDocument();
  });
});
