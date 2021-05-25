import produce from "immer";
import {
  SET_MEMBERSHIP_USER_LOADING,
  ADD_MEMBERSHIP_USERS,
  RESET_MEMBERSHIP_USER,
} from "../constants/membershipUsers";

const initialState = {
  loading: false,

  items: [],
  total: 0,
};

const membershipUsers = produce((draft, action = {}) => {
  switch (action.type) {
    case SET_MEMBERSHIP_USER_LOADING:
      draft.loading = action.payload.loading;
      return;
    case ADD_MEMBERSHIP_USERS: {
      const { nodes, total } = action.payload;
      draft.items = nodes;
      draft.total = total;
      return;
    }
    case RESET_MEMBERSHIP_USER:
      return initialState;
  }
}, initialState);

export default membershipUsers;
