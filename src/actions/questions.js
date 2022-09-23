import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser, addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

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

function addAnswerToQuestion(answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    answer,
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
export function handleAddAnswer(answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    // console.log("answer pre return", answer);
    return saveQuestionAnswer(answer)
      .then(() => {
        // console.log("answer post return", answer);
        dispatch(addAnswerToUser(answer));
        dispatch(addAnswerToQuestion(answer));
      })
      .then(() => dispatch(hideLoading()));
  };
}
