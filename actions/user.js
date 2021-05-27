import {
  SET_USER_LOADING,
  SET_USER,
  RESET_USER,
  USER_API,
} from "../constants/user";

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await fetch(USER_API);
    const data = await response.json();
    dispatch(setUserDetails(data));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setUserDetails = (user) => {
  return {
    type: SET_USER,
    payload: { user },
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_USER_LOADING,
    payload: { loading },
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
