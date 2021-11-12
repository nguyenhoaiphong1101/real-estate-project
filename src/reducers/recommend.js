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
                total_page: action.total_page,
                totalItem: action.totalItem,
            };
        }
        default:
            return state;
    }
}
export default recommendReducer;