import { listLatestNew } from "../api/latestnewApi";

export const loadListLatestNew = (params) => {
  return (dispatch) => {
    dispatch({
      type: "LOAD_LATEST_LOADING",
    });
    listLatestNew.GET(params).then((res) => {
      dispatch({
        type: "LOAD_LATESTNEW",
        payload: res,
      });
    });
  };
};
