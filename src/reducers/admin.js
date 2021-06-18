const initialState = {
    apartment: {
        listApartment: [],
        total_page: null,
        totalItem: null,
    },
    user: {
        listUser: [],
        total_page: null,
        totalItem: null,
    },
    category: {
        listCategory: [],
        total_page: null,
        totalItem: null,
    }
}


const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LISTAPARTMENT': {
            return {
                ...state,
                apartment: {
                    listApartment: action.payload.listApartment,
                    total_page: action.payload.total_page,
                    totalItem: action.payload.totalItem
                }
            };
        }
        case 'GET_LISTUSER': {
            return {
                ...state,
                user: {
                    listUser: action.payload.listUser,
                    total_page: action.payload.total_page,
                    totalItem: action.payload.totalItem
                }
            };
        }
        case 'GET_LISTCATEGORY': {
            return {
                ...state,
                category: {
                    listCategory: action.payload.listCategory,
                    total_page: action.payload.total_page,
                    totalItem: action.payload.totalItem
                }
            };
        }

        default:
            return state;
    }
}

export default adminReducer;