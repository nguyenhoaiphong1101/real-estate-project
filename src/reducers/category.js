const initialState = {
    listCategory: []
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORY': {
            return {
                ...state,
                listCategory: action.payload,
            };
        }
        default:
            return state;
    }
}

export default categoryReducer;