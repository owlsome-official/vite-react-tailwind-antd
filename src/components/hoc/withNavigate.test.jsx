import { render } from "utils/test/utils";
import { withNavigate } from "./withNavigate";

vi.mock("react-router-dom");

describe("Test withNavigate", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withNavigate(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      { navigate: undefined }, // cause mock router
      expect.anything()
    );
  });
  test("should be found props passed", () => {
    const mockComponent = vi.fn(() => null);
    const ComponentWrapped = withNavigate(mockComponent);

    const dummyPropsValue = "mock";
    render(<ComponentWrapped dummyProps={dummyPropsValue} />);

    expect(mockComponent).toHaveBeenCalled();
    expect(mockComponent).toHaveBeenCalledWith(
      { navigate: undefined, dummyProps: dummyPropsValue }, // cause mock router
      expect.anything()
    );
  });
});
