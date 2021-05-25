import produce from "immer";
import {
  SET_MEMBERS_LOADING,
  ADD_MEMBERS,
  RESET_MEMBERS,
} from "../constants/members";

const initialState = {
  loading: false,
  items: [],
  total: 0,
};

const membershipUsers = produce((draft, action = {}) => {
  switch (action.type) {
    case SET_MEMBERS_LOADING:
      draft.loading = action.payload.loading;
      return;
    case ADD_MEMBERS: {
      const { nodes, total } = action.payload;
      draft.items = nodes;
      draft.total = total;
      return;
    }
    case RESET_MEMBERS:
      return initialState;
  }
}, initialState);

export default membershipUsers;
