import produce from "immer";
import { SET_USER_LOADING, SET_USER, RESET_USER } from "../constants/user";

const initialState = {
  loading: false,
  id: null,
  name: null,
};

const usersReducer = produce((draft, action = {}) => {
  switch (action.type) {
    case SET_USER_LOADING:
      draft.loading = action.payload.loading;
      return;
    case SET_USER: {
      const { user } = action.payload;
      return user;
    }
    case RESET_USER:
      return initialState;
  }
}, initialState);

export default usersReducer;
