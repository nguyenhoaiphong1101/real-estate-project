const initialState = {
    detailHome: {}
}


const detailHomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DETAILHOME': {
            return {
                ...state,
                detailHome: action.payload,
            };
        }
        default:
            return state;
    }
}

export default detailHomeReducer;