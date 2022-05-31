import axios from "axios";
import { API_URL } from "../constants/Config";

export const listSearch = {
  GET: (params) => {
    return axios({
      method: "get",
      data: null,
      params: {
        ...params,
        size: 12,
      },
      url: API_URL + "/public/apartment/search",
    }).then((res) => res.data.data);
  },
};
export const listSearchCompare = {
  GET: (params = {}) => {
    return axios({
      method: "get",
      data: null,
      url: API_URL + "/public/apartment/search/all",
      params,
    }).then((res) => res.data.data);
  },
};
