import CustomTable from "./CustomTable";
import { render } from "@testing-library/react";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Custom table", () => {
  test("should render correctly", () => {
    const { queryByTestId } = render(<CustomTable />);
    expect(queryByTestId("custom-table")).toBeTruthy();
  });
});
