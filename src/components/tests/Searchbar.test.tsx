import Searchbar from "../commonComponents/SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { WithTheme } from "./testHelpers";
import "@testing-library/jest-dom/extend-expect";
import { IsNotEmptyValidator } from "../commonComponents/SearchBar/useValidation/validators";
import useDebounce from "../commonComponents/SearchBar/useDebounce";
import useValidation from "../commonComponents/SearchBar/useValidation";
import { ValidatorType } from "../commonComponents/SearchBar/useValidation/models";

const onChange = jest.fn();
const message = "Example message";
const validators = [new IsNotEmptyValidator(message)];
const validValue = "valid value";
const error = {
  message: "Example error message",
  type: ValidatorType.IsNotEmpty,
};

jest.mock("../commonComponents/SearchBar/useDebounce.tsx", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
jest.mock("../commonComponents/SearchBar/useValidation", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("Searchbar Component", () => {
  beforeEach(() => {
    (useDebounce as jest.Mock).mockImplementation((value) => value);
    (useValidation as jest.Mock).mockReturnValue([]);
  });
  afterEach(() => {});
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
