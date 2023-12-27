import OverlayLoadingCustom from "components/Common/OverlayLoadingCustom";
import { render, screen } from "utils/test/utils";
import { describe, expect, test } from "vitest";

describe.concurrent("Test OverlayLoadingCustom.jsx", () => {
  test("should not be visible when not have any attr", () => {
    const view = render(<OverlayLoadingCustom />);
    expect(view.container).toHaveTextContent("รอสักครู่");
  });

  test("should be visible on active is true", () => {
    render(<OverlayLoadingCustom active={true} />);
    const loadingContainer = screen.getByTestId("loading-container");
    expect(loadingContainer).toBeVisible();
    expect(loadingContainer).toBeInTheDocument();
  });

  test("should be visible custom loading by loadingNumber attr", () => {
    render(<OverlayLoadingCustom active={true} loadingNumber={1} />);
    const loadingContainer = screen.getByTestId("loading-container");
    expect(loadingContainer).toBeVisible();
    expect(loadingContainer).toBeInTheDocument();
  });

  test("should be visible custom text", () => {
    const loadingText = "loading";
    const view = render(
      <OverlayLoadingCustom active={true} text={loadingText} />
    );
    expect(view.container).toHaveTextContent(loadingText);
  });
});
