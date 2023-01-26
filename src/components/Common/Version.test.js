import { render, screen } from "@testing-library/react";
import Version from "../Version";

describe("Test Version.js", () => {
  test('should render "v" and following some semantic version number', () => {
    render(<Version />);
    const vContainer = screen.getByTestId("versionContainer");
    expect(vContainer).toBeVisible();
    expect(vContainer.innerHTML).toContain("v");
    expect(vContainer.innerHTML).toContain(".");
  });
});
