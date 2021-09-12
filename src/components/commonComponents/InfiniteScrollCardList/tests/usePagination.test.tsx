import React from "react";
import { HookWithModalContext, mockUseState } from "../../../../tests/helpers";
import { act } from "react-dom/test-utils";
import usePagination from "../usePagination";
import ErrorMessager from "../../ErrorMessager";

const error = new Error("Error example");
const mockFetchCallback = jest.fn();
const mockFetchCallbackRejected = (_pageLimit: number, _offset: number) =>
  Promise.reject(error);
const pageLimit = 1;
const item = "exampleItem";

describe("usePagination hook", () => {
  beforeEach(() => {
    mockFetchCallback.mockReturnValue(Promise.resolve([item]));
  });

  afterEach(() => jest.restoreAllMocks());

  it("should return no items and not be loading with no interaction", () => {
    const { isLoading, items } = HookWithModalContext(() =>
      usePagination(mockFetchCallback, pageLimit)
    );

    expect(isLoading).toBe(false);
    expect(items).toHaveLength(0);
  });

  it("should get first page with page limit and no offset", async () => {
    const mockSetState = mockUseState({ items: [], isLoading: false });
    const { getFirstPage } = HookWithModalContext(() =>
      usePagination(mockFetchCallback, pageLimit)
    );

    await act(() => getFirstPage());

    expect(mockFetchCallback).toHaveBeenCalledTimes(1);
    expect(mockFetchCallback).toHaveBeenCalledWith(pageLimit, 0);
    expect(mockSetState).toHaveBeenCalledWith({
      isLoading: false,
      items: [item],
    });
  });

  it("should add next page with page limit and offset", async () => {
    const mockSetState = mockUseState({ items: [item], isLoading: false });
    const { addNextPage } = HookWithModalContext(() =>
      usePagination(mockFetchCallback, pageLimit)
    );

    await act(() => addNextPage());

    expect(mockFetchCallback).toHaveBeenCalledTimes(1);
    expect(mockFetchCallback).toHaveBeenCalledWith(pageLimit, 1);
    expect(mockSetState).toHaveBeenCalledWith({
      isLoading: false,
      items: [item, item],
    });
  });

  it("should be loading until it gets fetched items", async () => {
    const mockSetState = mockUseState({ items: [], isLoading: false });
    const { getFirstPage } = HookWithModalContext(() =>
      usePagination(mockFetchCallback, pageLimit)
    );

    await act(() => getFirstPage());

    expect(mockSetState).toHaveBeenCalledWith({
      isLoading: true,
      items: [],
    });
    expect(mockSetState).toHaveBeenLastCalledWith({
      isLoading: false,
      items: [item],
    });
    expect(mockSetState).toHaveBeenCalledTimes(2);
  });

  it("should show an error message if it fails fetching the items", async () => {
    const mockUseContext = jest.spyOn(React, "useContext");
    const mockHandleModal = jest.fn();
    mockUseContext.mockImplementation(() => ({
      handleModal: mockHandleModal,
    }));
    const { getFirstPage } = HookWithModalContext(() =>
      usePagination(mockFetchCallbackRejected, pageLimit)
    );

    await act(() => getFirstPage());

    expect(mockHandleModal).toHaveBeenCalledWith(
      true,
      <ErrorMessager error={error} />
    );
  });
});
