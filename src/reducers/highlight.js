const initialState = {
  listHighlight: [],
  loadingList: false,
};

const highlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_HIGHLIGHT": {
      return {
        ...state,
        listHighlight: action.payload,
        loadingList: false,
      };
    }
    case "LOAD_HIGHLIGHT_LOADING": {
      return {
        ...state,
        loadingList: true,
      };
    }
    default:
      return state;
  }
};

export default highlightReducer;
