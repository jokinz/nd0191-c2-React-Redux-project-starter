export const SET_ACTIVE_USER = "SET_ACTIVE_USER";

export function setActiveUser(id) {
  return {
    type: SET_ACTIVE_USER,
    id,
  };
}
