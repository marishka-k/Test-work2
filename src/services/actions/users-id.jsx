import { getUsersDataId } from "../../components/api/api";

export const USERS_ID_REQUEST = "USERS_ID_REQUEST";
export const USERS_ID_SUCCESS = "USERS_ID_SUCCESS";
export const USERS_ID_FAILED = "USERS_ID_FAILED";

export function getUsersId(filter) {
  return function (dispatch) {
    dispatch({
      type: USERS_ID_REQUEST,
    });
    getUsersDataId(filter)
      .then((res) => {
        dispatch({
          type: USERS_ID_SUCCESS,
          usersById: res,
        });
      })
      .catch(() => {
        dispatch({
          type: USERS_ID_FAILED,
        });
      });
  };
}
