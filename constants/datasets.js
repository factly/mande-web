export const ADD_DATASET = "ADD_DATASET";
export const ADD_DATASET_FORMAT = "ADD_DATASET_FORMAT";
export const REMOVE_DATASET_FORMAT = "REMOVE_DATASET_FORMAT";
export const ADD_DATASETS = "ADD_DATASETS";
export const SET_DATASET_LOADING = "SET_DATASET_LOADING";
export const SET_DATASET_REQUEST = "SET_DATASET_REQUEST";
export const SET_DATASET_IDS = "SET_DATASET_IDS";
export const RESET_DATASET = "RESET_DATASET";

export const DATASET_API = `/datasets`;

export const dataset = {
  contact_email: "vishnu@factly.in",
  contact_name: "Vishnu",
  created_at: "2020-12-12",
  data_standard: "string",
  deleted_at: null,
  description: "Long description",
  featured_media: {
    alt_text: "flower",
    caption: "yellow",
    created_at: "2020-12-12",
    deleted_at: null,
    description: "media description",
    dimensions: "string",
    file_size: 200,
    id: 2,
    name: "Yellow flower",
    slug: "yellow-flower-1",
    title: "YF",
    type: "jpeg",
    updated_at: null,
    url: "gcs.url",
  },
  featured_media_id: 2,
  formats: [
    {
      created_at: "string",
      dataset_id: 0,
      deleted_at: "string",
      format: {
        created_at: "string",
        deleted_at: "string",
        description: "string",
        id: 0,
        is_default: true,
        name: "string",
        updated_at: "string",
      },
      format_id: 0,
      id: 0,
      updated_at: "string",
      url: "string",
    },
  ],
  frequency: "2 Days",
  granularity: "string",
  id: 0,
  license: "MIT",
  related_articles: "related articles",
  source: "Govt. of India",
  temporal_coverage: "string",
  time_saved: 0,
  title: "Population",
  updated_at: "string",
};
