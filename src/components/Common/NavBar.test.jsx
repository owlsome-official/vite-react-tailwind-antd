import { render, screen } from "utils/test/utils";
import { describe, expect, test } from "vitest";
import NavBar from "./NavBar";

describe("Test NavBar", () => {
  test("should be visible", () => {
    render(<NavBar />);
    const navbarContainer = screen.getByTestId("navbarContainer");
    expect(navbarContainer).toBeVisible();

    const navbarLogo = screen.getByTestId("navbarLogo");
    expect(navbarLogo).toBeVisible();

    const navbarTitle = screen.getByTestId("navbarTitle");
    expect(navbarTitle).toBeVisible();
  });

  test("should be visible with fullSize props", () => {
    render(<NavBar fullSize={true} />);
    const navbarContainer = screen.getByTestId("navbarContainer");
    expect(navbarContainer).toBeVisible();

    const navbarTitle = screen.getByTestId("navbarTitle");
    expect(navbarTitle).not.toHaveStyle("max-width: calc(100vw - 200px)");
  });
});
