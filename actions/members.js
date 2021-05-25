import axios from "../utils/axios";

import {
  SET_MEMBERS_LOADING,
  MEMBERS_API,
  ADD_MEMBERS,
} from "../constants/members";

export const loadMembers = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: MEMBERS_API,
      method: "get",
    });

    dispatch(addMembers(response.data));
    dispatch(setLoading(false));
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_MEMBERS_LOADING,
    payload: { loading },
  };
};

export const addMembers = (data) => {
  return {
    type: ADD_MEMBERS,
    payload: data,
  };
};
