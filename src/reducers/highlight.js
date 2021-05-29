const initialState = {
    listHighlight: []
}


const highlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_HIGHLIGHT': {
            return {
                ...state,
                listHighlight: action.payload,
            };
        }
        default:
            return state;
    }
}

export default highlightReducer;