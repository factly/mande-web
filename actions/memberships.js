import axios from "../utils/axios";
import {
  ADD_MEMBERSHIPS,
  SET_MEMBERSHIP_LOADING,
  SET_MEMBERSHIP_REQUEST,
  SET_MEMBERSHIP_IDS,
  RESET_MEMBERSHIP,
  MEMBERSHIP_API,
} from "../constants/memberships";
import { addPlans } from "./plans";
import { addPayments } from "./payments";
import {
  getIds,
  getValues,
  deleteKeys,
  buildObjectOfItems,
} from "../utils/objects";

export const loadMemberships = (page = 1, limit = 20) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${MEMBERSHIP_API}?page=${page}&limit=${limit}`,
      method: "get",
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { page: page, limit: limit, ids: currentPageIds };
    dispatch(setMembershipRequest(currentReq, total));
    dispatch(addMemberships(nodes));
    dispatch(setMembershipIds(currentPageIds));

    dispatch(setLoading(false));
  };
};

export const createMembership = (data) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: MEMBERSHIP_API,
      method: "post",
      data,
    });

    dispatch(resetMembership());
    dispatch(loadMemberships());
    dispatch(setLoading(false));
    return response.data;
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_MEMBERSHIP_LOADING,
    payload: { loading },
  };
};

export const addMemberships = (memberships) => (dispatch) => {
  const payments = getValues(memberships, "payment");
  dispatch(addPayments(payments));

  const plans = getValues(memberships, "plan");
  dispatch(addPlans(plans));

  dispatch({
    type: ADD_MEMBERSHIPS,
    payload: {
      memberships: buildObjectOfItems(
        deleteKeys(memberships, ["payment", "plan"])
      ),
    },
  });
};

export const setMembershipRequest = (req, total) => {
  return {
    type: SET_MEMBERSHIP_REQUEST,
    payload: { req, total },
  };
};

export const setMembershipIds = (ids) => {
  return {
    type: SET_MEMBERSHIP_IDS,
    payload: { ids },
  };
};

export const resetMembership = () => {
  return {
    type: RESET_MEMBERSHIP,
  };
};
