const initialState = {
    listRecommend: [],
    total_page: null,
    totalItem: null,
}


const recommendReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_RECOMMEND': {
            return {
                ...state,
                listRecommend: action.payload,
            };
        }
        default:
            return state;
    }
}

export default recommendReducer;