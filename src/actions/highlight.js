import { listHighlightApi } from "../api/highlightApi";

export const loadListHighlight = (params) => {
  return (dispatch) => {
    dispatch({
      type: "LOAD_HIGHLIGHT_LOADING",
    });
    listHighlightApi.GET(params).then((res) => {
      dispatch({
        type: "LOAD_HIGHLIGHT",
        payload: res,
      });
    });
  };
};
