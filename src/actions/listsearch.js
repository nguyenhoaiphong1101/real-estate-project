import { listSearch } from "../api/listsearchApi";

export const loadListSearch = (params) => {
  return (dispatch) => {
    dispatch({
      type: "LOAD_SEARCH_LOADING",
    });
    listSearch.GET(params).then((res) => {
      dispatch({
        type: "LOAD_LISTSEARCH",
        payload: res.contents,
        total_page: res.total_page,
        totalItem: res.totalItem,
      });
    });
  };
};
