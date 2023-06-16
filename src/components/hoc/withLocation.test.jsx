import { render } from "utils/test/utils";
import { withLocation } from "./withLocation";

vi.mock("react-router-dom");

describe("Test withLocation", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withLocation(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toBeCalled();
    expect(mockComponent).toBeCalledWith(
      { location: undefined }, // cause mock router
      expect.anything()
    );
  });
});
