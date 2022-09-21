import { SET_ACTIVE_USER } from "../actions/activeUser";
export default function activeUser(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.id,
      };
    default:
      return state;
  }
}
