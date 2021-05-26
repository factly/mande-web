import axios from "axios";
import { MEMBERSHIP_API } from "../constants/memberships";

import {
  SET_MEMBERSHIP_USER_LOADING,
  RESET_MEMBERSHIP_USER,
  ADD_MEMBERSHIP_USERS,
} from "../constants/membershipUsers";

export const loadMembershipUsers = (mID) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${MEMBERSHIP_API}/${mID}/users`,
      method: "get",
    });

    dispatch(addMembershipUsers(response.data));
    dispatch(setLoading(false));
  };
};

export const createMembershipUser = (mID, uID) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await axios({
      url: `${MEMBERSHIP_API}/${mID}/users`,
      method: "post",
      data: {
        user_id: uID,
      },
    });

    dispatch(resetMembershipUser());
    dispatch(loadMembershipUsers(mID));
  };
};

export const deleteMembershipUser = (mID, uID) => {
  return async (dispatch) => {
    await axios({
      url: MEMBERSHIP_API + "/" + mID + "/users/" + uID,
      method: "delete",
    });

    dispatch(resetMembershipUser());
    dispatch(loadMembershipUsers());
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_MEMBERSHIP_USER_LOADING,
    payload: { loading },
  };
};

export const addMembershipUsers = (data) => {
  return {
    type: ADD_MEMBERSHIP_USERS,
    payload: data,
  };
};

export const resetMembershipUser = () => {
  return {
    type: RESET_MEMBERSHIP_USER,
  };
};
