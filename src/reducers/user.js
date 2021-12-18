const initialState = {
    user: {},
    postUser: {
        post: [],
        total_page: null,
        totalItem: null,
    },
    postFavorite: {
        post: [],
        total_page: null,
        totalItem: null,
    },
    listCompare: [],
    listDetailCompare: [],
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
                postUser: {
                    post: action.payload,
                    total_page: action.total_page,
                    totalItem: action.totalItem
                }
            };
        }
        case 'GET_FAVORITEUSER': {
            return {
                ...state,
                postFavorite: {
                    post: action.payload,
                    total_page: action.total_page,
                    totalItem: action.totalItem
                }
            };
        }
        case 'RESET_USER': {
            return {
                ...state,
                user: action.payload.user,
                postUser: action.payload.postUser,
                postFavorite: action.payload.postFavorite,
            };
        }
        case 'CHANGE_COMPARE': {
            return {
                ...state,
                listCompare: action.payload.listCompare,
            };
        }
        case 'CHANGE_COMPARE_DETAIL': {
            return {
                ...state,
                listDetailCompare: action.payload.listDetailCompare,
            };
        }
        default:
            return state;
    }
}

export default userReducer;