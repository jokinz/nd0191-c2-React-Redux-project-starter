import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      // console.log(action.question);
      const updatedQuestions = {
        ...state,
        [action.question.id]: action.question,
      };
      return { ...updatedQuestions };
    case ADD_ANSWER_TO_QUESTION:
      const authedUser = action.answer.authedUser;
      const qid = action.answer.qid;
      const answer = action.answer.answer;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
