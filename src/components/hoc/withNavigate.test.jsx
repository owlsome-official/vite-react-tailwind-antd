import { render } from "utils/test/utils";
import { withNavigate } from "./withNavigate";

vi.mock("react-router-dom");

describe("Test withNavigate", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withNavigate(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toBeCalled();
    expect(mockComponent).toBeCalledWith(
      { navigate: undefined }, // cause mock router
      expect.anything()
    );
  });
});
