import { fireEvent, render } from "@testing-library/react";
import NewQuestion from "./NewQuestion";
import { createStore } from "redux";
import reducer from "../reducers";
import middlewares from "../middlewares";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";

describe("NewQuestion", () => {
  it("matches the snapshot test", () => {
    const store = createStore(reducer, middlewares);

    var component = render(
      <Router location={"/"}>
        <NewQuestion store={store} activeUser={"sarahedo"} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
  it("changes the input content for the option 1", () => {
    const store = createStore(reducer, middlewares);

    var component = render(
      <Router location={"/"}>
        <NewQuestion store={store} activeUser={"sarahedo"} />
      </Router>
    );
    var optionOneInput = component.getByTestId("option-one-input");
    const changeOptionInput = () => {
      fireEvent.change(optionOneInput, { target: { value: "new text" } });
    };
    changeOptionInput();
    expect(optionOneInput.value).toBe("new text");
  });
  it("changes the input content for the option 2", () => {
    const store = createStore(reducer, middlewares);

    var component = render(
      <Router location={"/"}>
        <NewQuestion store={store} activeUser={"sarahedo"} />
      </Router>
    );
    var optionTwoInput = component.getByTestId("option-two-input");
    const changeOptionInput = () => {
      fireEvent.change(optionTwoInput, { target: { value: "new text" } });
    };
    changeOptionInput();
    expect(optionTwoInput.value).toBe("new text");
  });
});
