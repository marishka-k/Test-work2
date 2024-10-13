import { USERS_ID_FAILED, USERS_ID_REQUEST, USERS_ID_SUCCESS } from "../actions/users-id";

const usersInitialState = {
  users: [],
  usersRequest: false,
  usersFailed: false,
};

export const usersReducerId = (state = usersInitialState, action) => {
  switch (action.type) {

    case USERS_ID_FAILED: {
      return {
        ...state,
        usersRequest: false,
        usersFailed: true,
      };
    }

    case USERS_ID_REQUEST: {
      return {
        ...state,
        usersRequest: true,
        usersFailed: false,
      };
    }

    case USERS_ID_SUCCESS: {
      return {
        ...state,
        usersRequest: false,
        usersFailed: false,
        users: action.usersById,
      };

    }

    default: {
      return state;
      
    }
  }
};
