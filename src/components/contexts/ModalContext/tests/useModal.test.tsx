import { Hook, mockUseState } from "../../../../tests/helpers";
import useModal from "../useModal";
import { act } from "@testing-library/react";

const visible = true;
const modalContent = <p>Example content</p>;

describe("useModalHook hook", () => {
  it("should change debounced value after custom delay", async () => {
    const setState = mockUseState("");
    const {
      current: { handleModal },
    } = Hook(() => useModal());

    act(() => handleModal(visible, modalContent));

    expect(setState).toHaveBeenCalledWith(visible);
    expect(setState).toHaveBeenLastCalledWith(modalContent);
  });
});
