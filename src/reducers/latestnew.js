const initialState = {
    listLastetNew: []
}


const latestNewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LATESTNEW': {
            return {
                ...state,
                listLastetNew: action.payload,
            };
        }
        default:
            return state;
    }
}

export default latestNewReducer;