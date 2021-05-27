import axios from "axios";
import {
  ADD_CATALOG,
  ADD_CATALOGS,
  SET_CATALOG_LOADING,
  SET_CATALOG_REQUEST,
  SET_CATALOG_IDS,
  SET_PURCHASED_CATALOG_IDS,
  RESET_CATALOG,
  CATALOG_API,
} from "../constants/catalogs";
import { addProducts } from "./products";
// import { addMedia } from "./media";
import {
  getIds,
  buildObjectOfItems,
  getValues,
  // deleteKeys,
} from "../utils/objects";

export const loadCatalogs = (params) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${CATALOG_API}`,
      method: "get",
      params: params,
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { ...params, ids: currentPageIds };
    dispatch(setCatalogRequest(currentReq, total));
    dispatch(addCatalogs(nodes));
    dispatch(setCatalogIds(currentPageIds));

    dispatch(setLoading(false));
  };
};

export const loadPurchasedCatalogs = (page = 1, limit = 5) => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const response = await axios({
      url: `${CATALOG_API}/my?page=${page}&limit=${limit}`,
      method: "get",
    });

    const { nodes, total } = response.data;
    const currentPageIds = getIds(nodes);
    const currentReq = { page: page, limit: limit, ids: currentPageIds };
    dispatch(setCatalogRequest(currentReq, total));
    dispatch(setPurchasedCatalogIds(nodes));
    dispatch(setCatalogIds(currentPageIds));

    dispatch(setLoading(false));
  };
};

export const getCatalog = (id) => {
  return async (dispatch, getState) => {
    const {
      catalogs: { items },
    } = getState();

    if (items[id]) {
      return;
    }

    dispatch(setLoading(true));

    const response = await axios({
      url: `${CATALOG_API}/${id}`,
      method: "get",
    });
    dispatch(addCatalog(response.data));

    dispatch(setLoading(false));
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_CATALOG_LOADING,
    payload: { loading },
  };
};

export const addCatalog = (catalog) => (dispatch) => {
  // const media = getValues([catalog], "featured_medium");
  // dispatch(addMedia(media));

  const products = getValues([catalog], "products");
  dispatch(addProducts(products));

  catalog.products = getIds(catalog.products);

  dispatch({
    type: ADD_CATALOG,
    payload: {
      catalog,
      // catalog: deleteKeys([catalog], ['featured_medium'])[0]
    },
  });
};

export const addCatalogs = (catalogs) => (dispatch) => {
  // const media = getValues(catalogs, "featured_medium");
  // dispatch(addMedia(media));

  const products = getValues(catalogs, "products");
  dispatch(addProducts(products));

  catalogs.forEach((catalog) => {
    catalog.products = getIds(catalog.products);
  });

  dispatch({
    type: ADD_CATALOGS,
    payload: {
      // catalogs: buildObjectOfItems(deleteKeys(catalogs, ["featured_medium"])),
      catalogs: buildObjectOfItems(catalogs),
    },
  });
};

export const setCatalogRequest = (req, total) => {
  return {
    type: SET_CATALOG_REQUEST,
    payload: { req, total },
  };
};

export const setCatalogIds = (ids) => {
  return {
    type: SET_CATALOG_IDS,
    payload: { ids },
  };
};

export const setPurchasedCatalogIds = (ids) => {
  return {
    type: SET_PURCHASED_CATALOG_IDS,
    payload: { ids },
  };
};

export const resetCatalog = () => {
  return {
    type: RESET_CATALOG,
  };
};
