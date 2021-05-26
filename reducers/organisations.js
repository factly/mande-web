import {
  SET_ORGANISATION_LOADING,
  ADD_ORGANISATION,
  SET_SELECTED_ORGANISATION,
} from "../constants/organisations";

const initialState = {
  ids: [],
  details: {},
  loading: true,
  selected: 0,
};

export default function organisations(state = initialState, action = {}) {
  if (!action.payload) {
    return state;
  }
  switch (action.type) {
    case SET_ORGANISATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ORGANISATION:
      console.log({ action });
      return {
        ids: action.payload.map((each) => each.id),
        details: action.payload.reduce(
          (obj, item) => Object.assign(obj, { [item.id]: item }),
          {}
        ),
        selected: action.payload.length > 0 ? action.payload[0].id : 0,
        loading: false,
      };
    case SET_SELECTED_ORGANISATION:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
}
