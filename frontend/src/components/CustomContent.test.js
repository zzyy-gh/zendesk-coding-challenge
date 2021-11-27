import { render } from "@testing-library/react";
import CustomContent from "./CustomContent";
import { ERROR_MSG_404, ERROR_MSG_500 } from "./../constants/error_msg";
import "@testing-library/jest-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Custom content", () => {
  test("should render correctly", () => {
    const { queryByTestId } = render(<CustomContent />);
    expect(queryByTestId("custom-content")).toBeTruthy();
  });

  test("display error 404 if exists", () => {
    const { getByTestId } = render(<CustomContent error={ERROR_MSG_404} />);
    expect(getByTestId("err-msg")).toHaveTextContent(ERROR_MSG_404);
  });

  test("display error 500 if exists", () => {
    const { getByTestId } = render(<CustomContent error={ERROR_MSG_500} />);
    expect(getByTestId("err-msg")).toHaveTextContent(ERROR_MSG_500);
  });
});
