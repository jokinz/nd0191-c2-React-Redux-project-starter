import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";
// import { setActiveUser } from "./activeUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      //TODO remove hardcoded active user
      // dispatch(setActiveUser("sarahedo"));
      dispatch(hideLoading());
    });
  };
}
