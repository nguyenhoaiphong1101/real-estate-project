const initialState = {
    listSearch: [],
    total_page: null,
    totalItem: null,

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