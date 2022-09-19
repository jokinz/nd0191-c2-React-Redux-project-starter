import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import users from "./users";
import questions from "./questions";
import activeUser from "./activeUser";
export default combineReducers({
  users,
  questions,
  activeUser,
  loadingBar: loadingBarReducer,
});
