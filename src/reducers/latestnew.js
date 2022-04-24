const initialState = {
  listLatestNew: [],
};

const latestNewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LATESTNEW": {
      return {
        ...state,
        listLatestNew: action.payload,
      };
    }
    default:
      return state;
  }
};

export default latestNewReducer;
