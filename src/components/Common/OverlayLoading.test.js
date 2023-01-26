import { render, screen } from "@testing-library/react";
import OverlayLoading, { randomIntFunc } from "./OverlayLoading";

describe("Test OverlayLoading.js", () => {
  const windowCryptoOriginal = window.crypto;

  beforeEach(() => {
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: windowCryptoOriginal,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: windowCryptoOriginal,
    });
  });

  test("should not be visible when not have any attr", () => {
    const view = render(<OverlayLoading />);
    expect(view.container).toContainHTML("<div />");
  });

  test("should be visible on active is true", () => {
    render(<OverlayLoading active={true} />);
    const loadingContainer = screen.getByTestId("loadingContainer");
    expect(loadingContainer).toBeVisible();
    expect(loadingContainer).toBeInTheDocument();
  });

  test("should be visible custom loading by loadingNumber attr", () => {
    render(<OverlayLoading active={true} loadingNumber={1} />);
    const loadingContainer = screen.getByTestId("loadingContainer");
    expect(loadingContainer).toBeVisible();
    expect(loadingContainer).toBeInTheDocument();
  });

  test("should be visible via window.crypto.getRandomValues", () => {
    const mockGetRandomValues = jest.fn();
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: {
        getRandomValues: mockGetRandomValues,
      },
    });

    render(<OverlayLoading active={true} />);
    const loadingContainer = screen.getByTestId("loadingContainer");
    expect(loadingContainer).toBeVisible();
    expect(loadingContainer).toBeInTheDocument();

    expect(mockGetRandomValues).toHaveBeenCalledTimes(1);
  });
});

describe("Test randomIntFunc", () => {
  const windowCryptoOriginal = window.crypto;

  beforeEach(() => {
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: windowCryptoOriginal,
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: windowCryptoOriginal,
    });
  });

  test("should be throw error on undefined window.crypto.getRandomValues", () => {
    Object.defineProperty(window, "crypto", {
      configurable: true,
      writable: true,
      value: "testing",
    });
    expect(() => randomIntFunc()).not.toThrowError();
    expect(randomIntFunc()).toBe(0);
  });
});
