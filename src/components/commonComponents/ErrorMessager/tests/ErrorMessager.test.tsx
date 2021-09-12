import ErrorMessager, {
  errorMessageTitle,
} from "..";
import { render, screen } from "@testing-library/react";
import { WithTheme } from "../../../../tests/helpers";
import "@testing-library/jest-dom/extend-expect";
import { error } from "../../../../tests/sampleData";

describe("ErrorMessager Component", () => {
  beforeEach(() => {
    render(WithTheme(<ErrorMessager error={error} />));
  });

  it("should render a title", () => {
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(errorMessageTitle);
  });

  it("should render the error message", () => {
    const errorMessage = screen.getByText(error.message);

    expect(errorMessage).toBeInTheDocument();
  });
});
