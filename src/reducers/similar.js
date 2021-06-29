const initialState = {
    listSimilar: [],
    total_page: null,
    totalItem: null,
}


const similarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_SIMILAR': {
            return {
                ...state,
                listSimilar: action.payload,
                total_page: action.total_page,
                totalItem: action.totalItem,
            };
        }
        default:
            return state;
    }
}

export default similarReducer;
