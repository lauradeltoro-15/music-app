import "@testing-library/jest-dom/extend-expect";
import InfiniteScrollCardList from "../commonComponents/InfiniteScrollCardList";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { WithTheme } from "./testHelpers";
import { cardData, cardStyle } from "./testSampleData";
import usePagination from "../commonComponents/InfiniteScrollCardList/usePagination";

const mockFetchItems = jest.fn((_limit: number, _offset: number) =>
  Promise.resolve([cardData])
);

const mockUsePagination = {
  items: [],
  isLoading: false,
  addNextPage: jest.fn(),
  getFirstPage: jest.fn(),
};

const mockLoadingUsePagination = {
  ...mockUsePagination,
  isLoading: true,
};

jest.mock(
  "../commonComponents/InfiniteScrollCardList/usePagination.tsx",
  () => {
    return {
      __esModule: true,
      default: jest.fn(),
    };
  }
);

const setWindowScrollingState = (isPageEnd: boolean) => {
  const scrollY = isPageEnd ? 150 : 50;
  Object.defineProperty(window, "innerHeight", {
    value: 100,
    configurable: true,
  });
  Object.defineProperty(window, "scrollY", {
    value: scrollY,
    configurable: true,
  });
  Object.defineProperty(document.body, "offsetHeight", {
    value: 200,
    configurable: true,
  });
};

const setWindowToPageEnd = () => setWindowScrollingState(true);
const setWindowBeforePageEnd = () => setWindowScrollingState(false);

const resetWindowState = (originalWindowInnerHeight: number) => {
  Object.defineProperty(window, "innerHeight", {
    value: originalWindowInnerHeight,
  });
  Object.defineProperty(window, "scrollY", { value: 0 });
  Object.defineProperty(document.body, "offsetHeight", { value: 0 });
};

describe("InfiniteScrollCardList Component", () => {
  let renderedComponent: RenderResult;

  beforeEach(() => {
    (usePagination as jest.Mock).mockReturnValue(mockUsePagination);

    renderedComponent = render(
      WithTheme(
        <InfiniteScrollCardList
          cardStyle={cardStyle}
          fetchItems={mockFetchItems}
        />
      )
    );
  });

  it("should request first page in first load", () => {
    expect(mockUsePagination.getFirstPage).toHaveBeenCalledTimes(1);
  });

  it("should request first page again if fetchItems has changed", () => {
    const newMockFetchItems = jest.fn((_limit: number, _offset: number) =>
      Promise.resolve([cardData])
    );
    renderedComponent.rerender(
      WithTheme(
        <InfiniteScrollCardList
          cardStyle={cardStyle}
          fetchItems={newMockFetchItems}
        />
      )
    );

    expect(mockUsePagination.getFirstPage).toHaveBeenCalledTimes(2);
  });
});

describe("InfiniteScrollCardList Component, scrolling", () => {
  const originalWindowInnerHeight = window.innerHeight;
  beforeEach(() => {
    (usePagination as jest.Mock).mockReturnValue(mockUsePagination);
  });

  afterAll(() => {
    resetWindowState(originalWindowInnerHeight);
  });

  it("should add next page when getting to the end of the window", () => {
    setWindowToPageEnd();
    render(
      WithTheme(
        <InfiniteScrollCardList
          cardStyle={cardStyle}
          fetchItems={mockFetchItems}
        />
      )
    );

    fireEvent.scroll(document, { target: { scrollY: 70 } });

    expect(mockUsePagination.addNextPage).toHaveBeenCalledTimes(1);
  });

  it("should not add next page if it is not at the end of the window", () => {
    setWindowBeforePageEnd();
    render(
      WithTheme(
        <InfiniteScrollCardList
          cardStyle={cardStyle}
          fetchItems={mockFetchItems}
        />
      )
    );

    fireEvent.scroll(document, { target: { scrollY: 10 } });

    expect(mockUsePagination.addNextPage).not.toHaveBeenCalled();
  });

  it("should not get next page at the end of the window if it is", () => {
    setWindowToPageEnd();
    (usePagination as jest.Mock).mockReturnValueOnce(mockLoadingUsePagination);
    render(
      WithTheme(
        <InfiniteScrollCardList
          cardStyle={cardStyle}
          fetchItems={mockFetchItems}
        />
      )
    );

    fireEvent.scroll(document, { target: { scrollY: 10 } });

    expect(mockLoadingUsePagination.addNextPage).not.toHaveBeenCalled();
  });
});
