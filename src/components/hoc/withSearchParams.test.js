import { render } from "@testing-library/react";
import { withSearchParams } from "./withSearchParams";

jest.mock("react-router-dom", () => {
  return {
    useSearchParams: () => [String(), jest.fn()],
  };
});

describe("Test withSearchParams", () => {
  test("should be wrap-able", () => {
    const mockComponent = jest.fn(() => null);
    const ComponentWrapped = withSearchParams(mockComponent);

    render(<ComponentWrapped />);

    expect(mockComponent).toBeCalled();
    expect(mockComponent).toBeCalledWith(
      {
        searchParams: expect.any(String),
        setSearchParams: expect.any(Function),
      },
      expect.anything()
    );
  });
});
