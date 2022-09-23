import {
  RECEIVE_USERS,
  ADD_QUESTION_TO_USER,
  ADD_ANSWER_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    case ADD_ANSWER_TO_USER:
      const authedUser = action.answer.authedUser;
      const qid = action.answer.qid;
      const answer = action.answer.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
