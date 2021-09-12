import Card from "../index";
import { render, screen } from "@testing-library/react";
import { CardProps } from "../models";
import { WithTheme } from "../../../../tests/helpers";
import "@testing-library/jest-dom/extend-expect";
import { defaultStyle } from "../index";
import { cardData, cardStyle, testUrl } from "../../../../tests/sampleData";

const cardPropsWithStyles: CardProps = {
  data: cardData,
  style: cardStyle,
};

const cardPropsWithoutStyles: CardProps = {
  data: cardData,
};

describe("Card Component with styles", () => {
  beforeEach(() => {
    render(WithTheme(<Card {...cardPropsWithStyles} />));
  });

  it("should render a title", () => {
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(cardPropsWithStyles.data.title);
  });

  it("should render an image", () => {
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", testUrl);
  });

  it("should have custom styles", () => {
    const card = screen.getByTestId("card");
    const image = screen.getByRole("img");
    const cardStyles = window.getComputedStyle(card);
    const imageStyles = window.getComputedStyle(image);
    const { style } = cardPropsWithStyles;

    expect(cardStyles.width).toBe(`${style?.width}px`);
    expect(cardStyles["min-height"]).toBe(`${style?.height}px`);
    expect(cardStyles.margin).toBe(`${style?.margin}px`);
    expect(imageStyles.height).toBe(`${style?.imageHeight}px`);
  });
});

describe("Card Component without styles", () => {
  beforeEach(() => {
    render(
      WithTheme(<Card {...cardPropsWithoutStyles} data-testid="cardTest" />)
    );
  });

  it("should have default styles", () => {
    const card = screen.getByTestId("card");
    const image = screen.getByRole("img");
    const cardStyles = window.getComputedStyle(card);
    const imageStyles = window.getComputedStyle(image);

    expect(cardStyles.width).toBe(`${defaultStyle.width}px`);
    expect(cardStyles["min-height"]).toBe(`${defaultStyle.height}px`);
    expect(cardStyles.margin).toBe(`${defaultStyle.margin}px`);
    expect(imageStyles.height).toBe(`${defaultStyle.imageHeight}px`);
  });
});
