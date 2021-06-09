const initialState = {
    listSearch: [],
    total_page: null,
    totalItem: null,
    // area: {
    //     area_from: null,
    //     area_to: null,
    // },
    // category_id: null,
    // district_id: null,
    // price: {
    //     price_from: null,
    //     price_to: null,
    // },
    // province_id: null,
}


const listSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LISTSEARCH': {
            return {
                ...state,
                listSearch: action.payload,
                total_page: action.total_page,
                totalItem: action.totalItem
            };
        }
        default:
            return state;
    }
}

export default listSearchReducer;