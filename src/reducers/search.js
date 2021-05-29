
const initialState = {
    country: [],
    province: [],
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PROVINCE': {
            return {
                ...state,
                province: action.payload,
            };
        }
        case 'LOAD_COUNTRY': {
            return {
                ...state,
                country: action.payload,
            };
        }
        default:
            return state;
    }
}

export default SearchReducer;