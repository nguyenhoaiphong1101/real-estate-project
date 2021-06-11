const initialState = {
    user: {},
    postUser: {
        post: [],
        total_page: null,
        totalItem: null,
    },
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INFOUSER': {
            return {
                ...state,
                user: action.payload,
            };
        }
        case 'GET_POSTUSER': {
            return {
                ...state,
                postUser:{
                    post: action.payload,
                    total_page: action.total_page,
                    totalItem: action.totalItem
                }
            };
        }
        default:
            return state;
    }
}

export default userReducer;