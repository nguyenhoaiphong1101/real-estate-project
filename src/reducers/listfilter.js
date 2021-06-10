const initialState = {
    valueCategory: {},
    valueCountry: {},
    valueProvince: {},
    valuePrice: {},
    valueArea: {},
    user_id: null,
}


const listFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LISTFILTER': {
            return {
                ...state,
                valueCategory: action.payload.valueCategory,
                valueCountry: action.payload.valueCountry,
                valueProvince: action.payload.valueProvince,
                valuePrice: action.payload.valuePrice,
                valueArea: action.payload.valueArea,
            };
        }
        default:
            return state;
    }
}

export default listFilterReducer;