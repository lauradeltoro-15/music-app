import { Hook, mockUseState } from "../../../../tests/helpers";
import useDebounce, { DEFAULT_DELAY } from "../useDebounce";

const value = "Example value";
const delay = 300;
const mockSetState = mockUseState("");

describe("useDebounce hook", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should change debounced value after custom delay", () => {
    Hook(() => useDebounce(value, delay));

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);

    jest.runAllTimers();

    expect(mockSetState).toHaveBeenCalledWith(value);
  });

  it("should change debounced value after default delay", () => {
    Hook(() => useDebounce(value));

    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      DEFAULT_DELAY
    );

    jest.runAllTimers();

    expect(mockSetState).toHaveBeenCalledWith(value);
  });

  it("should clear timeout when unmounting", () => {
    const { unmount } = Hook(() => useDebounce(value));

    unmount();

    expect(clearTimeout).toHaveBeenCalled();
  });
});
