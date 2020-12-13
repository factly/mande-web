import produce from "immer";
import { ADD_PLAN, ADD_PLANS } from "../constants/plans";

const initialState = {
  loading: true,
  ids: [],
  req: [],
  items: {},
  total: 0,
};

const plansReducer = produce((draft, action = {}) => {
  switch (action.type) {
    case ADD_PLAN: {
      const { plan } = action.payload;
      draft.items[plan.id] = plan;
      return;
    }
    case ADD_PLANS: {
      const { plans } = action.payload;
      Object.assign(draft.items, plans);
      return;
    }
  }
}, initialState);

export default plansReducer;
