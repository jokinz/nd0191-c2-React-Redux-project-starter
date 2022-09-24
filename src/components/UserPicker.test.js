import { fireEvent, render } from "@testing-library/react";
import UserPicker from "./UserPicker";
import { createStore } from "redux";
import reducer from "../reducers";
import middlewares from "../middlewares";
import "@testing-library/jest-dom";

describe("UserPicker", () => {
  it("matches the snapshot test", () => {
    const store = createStore(reducer, middlewares);
    const user = "none";
    const users = store.users;

    var component = render(
      <UserPicker store={store} activeUser={user} users={users} />
    );
    expect(component).toMatchSnapshot();
  });
  it("the users prop is not empty", () => {
    const store = createStore(reducer, middlewares);
    const user = "none";
    const users = store.users;

    var component = render(
      <UserPicker store={store} activeUser={user} users={users} />
    );
    expect(component.user).not.toEqual("");
  });
});
