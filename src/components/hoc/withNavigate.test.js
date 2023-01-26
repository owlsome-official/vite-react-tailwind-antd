import { render } from "@testing-library/react";
import { withNavigate } from "./withNavigate";

jest.mock("react-router-dom");

describe("Test withNavigate", () => {
  test("should be wrap-able", () => {
    const mockComponent = jest.fn(() => null);
    const ComponentWrapped = withNavigate(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toBeCalled();
    expect(mockComponent).toBeCalledWith(
      { navigate: undefined }, // cause mock router
      expect.anything()
    );
  });
});
