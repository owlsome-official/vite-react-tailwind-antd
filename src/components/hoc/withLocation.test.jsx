import { render } from "utils/test/utils";
import { describe, test, vi } from "vitest";
import { withLocation } from "./withLocation";

vi.mock("react-router");

describe.concurrent("Test withLocation", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withLocation(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      { location: undefined }, // cause mock router
      expect.anything(),
    );
  });
  test("should be found props passed", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withLocation(mockComponent);

    const dummyPropsValue = "mock";
    render(<ComponentWrapped dummyProps={dummyPropsValue} />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      { location: undefined, dummyProps: dummyPropsValue }, // cause mock router
      expect.anything(),
    );
  });
});
