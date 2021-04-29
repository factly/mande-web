import axios from "../utils/axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCTS,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_REQUEST,
  SET_PRODUCT_IDS,
  SET_PURCHASED_PRODUCT_IDS,
  RESET_PRODUCT,
  PRODUCT_API,
} from "../constants/products";
import { addCurrencies } from "./currencies";
// import { addTags } from "./tags";
// import { addMedium } from "./media";
import { addDatasets } from "./datasets";
import {
  getIds,
  buildObjectOfItems,
  getValues,
  deleteKeys,
} from "../utils/objects";

export const loadProducts = (params) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${PRODUCT_API}`,
      method: "get",
      params: params,
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { ...params, ids: currentPageIds };
    dispatch(addProducts(nodes));
    dispatch(setProductIds(currentPageIds));
    dispatch(setProductRequest(currentReq, total));

    dispatch(setLoading(false));
  };
};

export const loadPurchasedProducts = (page = 1, limit = 5) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${PRODUCT_API}/my?page=${page}&limit=${limit}`,
      method: "get",
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { page: page, limit: limit, ids: currentPageIds };
    dispatch(addProducts(nodes));
    dispatch(setPurchasedProductIds(currentPageIds));
    dispatch(setProductRequest(currentReq, total));

    dispatch(setLoading(false));
  };
};

export const getProduct = (id) => {
  return async (dispatch, getState) => {
    const {
      products: { items },
    } = getState();

    if (items[id]) {
      return;
    }

    dispatch(setLoading(true));

    const response = await axios({
      url: `${PRODUCT_API}/${id}`,
      method: "get",
    });
    dispatch(addProduct(response.data));

    dispatch(setLoading(false));
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_PRODUCT_LOADING,
    payload: { loading },
  };
};

export const addProduct = (product) => (dispatch) => {
  const currencies = getValues([product], "currency");
  dispatch(addCurrencies(currencies));

  // const medium = getValues([product], "featured_medium");
  // dispatch(addMedium(medium));

  const datasets = getValues([product], "datasets");
  dispatch(addDatasets(datasets));
  product.datasets = getIds(product.datasets);

  // const tags = getValues([product], "tags");
  // dispatch(addTags(tags));
  // product.tags = getIds(product.tags);

  dispatch({
    type: ADD_PRODUCT,
    payload: {
      product: deleteKeys([product], ["currency", "featured_medium"])[0],
    },
  });
};

export const addProducts = (products) => (dispatch) => {
  const currencies = getValues(products, "currency");
  dispatch(addCurrencies(currencies));

  // const medium = getValues(products, "featured_medium");
  // dispatch(addMedium(medium));

  const datasets = getValues(products, "datasets");
  dispatch(addDatasets(datasets));
  products.forEach((product) => {
    product.datasets = getIds(product.datasets);
  });

  // const tags = getValues(products, "tags");
  // dispatch(addTags(tags));
  // products.forEach((product) => {
  //   product.tags = getIds(product.tags);
  // });

  dispatch({
    type: ADD_PRODUCTS,
    payload: {
      products: buildObjectOfItems(
        deleteKeys(products, ["currency", "featured_medium"])
      ),
    },
  });
};

export const setProductRequest = (req, total) => {
  return {
    type: SET_PRODUCT_REQUEST,
    payload: { req, total },
  };
};

export const setPurchasedProductIds = (ids) => {
  return {
    type: SET_PURCHASED_PRODUCT_IDS,
    payload: { ids },
  };
};

export const setProductIds = (ids) => {
  return {
    type: SET_PRODUCT_IDS,
    payload: { ids },
  };
};

export const resetProduct = () => {
  return {
    type: RESET_PRODUCT,
  };
};
