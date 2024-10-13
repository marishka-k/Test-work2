import { getUsersDataUserName } from "../../components/api/api";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILED = "USERS_FAILED";

export function getUsersUsername(filter) {
  return function (dispatch) {
    dispatch({
      type: USERS_REQUEST,
    });
    getUsersDataUserName(filter)
      .then((res) => {
        dispatch({
          type: USERS_SUCCESS,
          usersByUsername: res,
        });
      })
      .catch(() => {
        dispatch({
          type: USERS_FAILED,
        });
      });
  };
}
