import axios from "../utils/axios";
import {
  ADD_DATASET,
  ADD_DATASET_FORMAT,
  REMOVE_DATASET_FORMAT,
  ADD_DATASETS,
  SET_DATASET_LOADING,
  SET_DATASET_REQUEST,
  SET_DATASET_IDS,
  RESET_DATASET,
  DATASET_API,
} from "../constants/datasets";
import { getIds, buildObjectOfItems } from "../utils/objects";

export const loadDatasets = (page = 1, limit = 5) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${DATASET_API}?page=${page}&limit=${limit}`,
      method: "get",
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { page: page, limit: limit, ids: currentPageIds };
    dispatch(setDatasetRequest(currentReq, total));
    dispatch(addDatasets(nodes));
    dispatch(setDatasetIds(currentPageIds));

    dispatch(setLoading(false));
  };
};

export const getDataset = (id) => {
  return async (dispatch, getState) => {
    const {
      datasets: { items },
    } = getState();

    if (items[id]) {
      return;
    }

    dispatch(setLoading(true));

    const response = await axios({
      url: `${DATASET_API}/${id}`,
      method: "get",
    });
    dispatch(addDataset(response.data));

    dispatch(setLoading(false));
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_DATASET_LOADING,
    payload: { loading },
  };
};

export const addDataset = (dataset) => {
  return {
    type: ADD_DATASET,
    payload: { dataset },
  };
};

export const addDatasets = (datasets) => {
  return {
    type: ADD_DATASETS,
    payload: {
      datasets: buildObjectOfItems(datasets),
    },
  };
};

export const addDatasetFormat = (datasetId, datasetFormat) => {
  return {
    type: ADD_DATASET_FORMAT,
    payload: { datasetId, datasetFormat },
  };
};

export const removeDatasetFormat = (datasetId, datasetFormatId) => {
  return {
    type: REMOVE_DATASET_FORMAT,
    payload: { datasetId, datasetFormatId },
  };
};

export const setDatasetRequest = (req, total) => {
  return {
    type: SET_DATASET_REQUEST,
    payload: { req, total },
  };
};

export const setDatasetIds = (ids) => {
  return {
    type: SET_DATASET_IDS,
    payload: { ids },
  };
};

export const resetDataset = () => {
  return {
    type: RESET_DATASET,
  };
};
