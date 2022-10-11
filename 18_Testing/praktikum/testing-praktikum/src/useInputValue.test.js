import { renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("return current initial value", () => {
    const { result } = renderHook(() => useInputValue("hello world"));
    expect(result.current.value).toEqual("hello world");
  });
});
