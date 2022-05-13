const initialState = {
  listLatestNew: [],
  loadingList: false,
};

const latestNewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LATESTNEW": {
      return {
        ...state,
        listLatestNew: action.payload,
        loadingList: false,
      };
    }
    case "LOAD_LATEST_LOADING": {
      return {
        ...state,
        loadingList: true,
      };
    }
    default:
      return state;
  }
};

export default latestNewReducer;
