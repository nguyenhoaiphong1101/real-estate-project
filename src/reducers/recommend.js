const initialState = {
  listRecommend: [],
  total_page: null,
  totalItem: null,
  loading: false,
};

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_RECOMMEND": {
      return {
        ...state,
        listRecommend: action.payload,
        total_page: action.total_page,
        totalItem: action.totalItem,
        loading: false,
      };
    }
    case "LOAD_RECOMMEND_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
export default recommendReducer;
