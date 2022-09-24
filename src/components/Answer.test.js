import { render } from "@testing-library/react";
import Answer from "./Answer";
import { createStore } from "redux";
import reducer from "../reducers";
import middlewares from "../middlewares";
import "@testing-library/jest-dom";

describe("Answer", () => {
  it("matches the snapshot", () => {
    const store = createStore(reducer, middlewares);

    var optionOne = {
      votes: ["tylermcginnis"],
      text: "Build our new application with Javascript",
    };
    var component = render(
      <Answer
        store={store}
        questionId={"8xf0y6ziyjabvozdd253nd"}
        answerValue={"optionOne"}
        answerStatus={""}
        answerData={optionOne}
        totalVotes={2}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
