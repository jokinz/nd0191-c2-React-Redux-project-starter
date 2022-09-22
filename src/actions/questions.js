import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    // console.log("question pre format:", question);
    dispatch(showLoading());
    return saveQuestion({
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText,
      author: question.author,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        // console.log("new question id:", question.id);
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
