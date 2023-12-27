import { render } from "utils/test/utils";
import { describe, test } from "vitest";
import { withSearchParams } from "./withSearchParams";

vi.mock("react-router-dom", () => {
  return {
    useSearchParams: () => [String(), vi.fn()],
  };
});

describe.concurrent("Test withSearchParams", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withSearchParams(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      {
        searchParams: expect.any(String),
        setSearchParams: expect.any(Function),
      },
      expect.anything()
    );
  });
  test("should be found props passed", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withSearchParams(mockComponent);

    const dummyPropsValue = "mock";
    render(<ComponentWrapped dummyProps={dummyPropsValue} />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      {
        searchParams: expect.any(String),
        setSearchParams: expect.any(Function),
        dummyProps: dummyPropsValue,
      },
      expect.anything()
    );
  });
});
