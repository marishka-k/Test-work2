import { combineReducers } from "redux";
import { usersReducerId } from "./users-Id";
import { usersReducerUsername } from "./users-username";


export const rootReducer = combineReducers({
  usersId: usersReducerId,
  usersUsername: usersReducerUsername
});
