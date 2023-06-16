import { render } from "utils/test/utils";
import { withSearchParams } from "./withSearchParams";

vi.mock("react-router-dom", () => {
  return {
    useSearchParams: () => [String(), vi.fn()],
  };
});

describe("Test withSearchParams", () => {
  test("should be wrap-able", () => {
    const mockComponent = vi.fn(() => null);
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
