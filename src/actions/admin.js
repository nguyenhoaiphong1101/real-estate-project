import { getApartment, getCategory, getUser } from "../api/adminApi"


export const getListApartment = () => {
    return (dispatch) => {
        getApartment.GET().then(res => {
            dispatch({
                type: 'GET_LISTAPARTMENT',
                payload: {
                    listApartment: res.contents,
                    total_page: res.total_page,
                    totalItem: res.totalItem,
                }
            })
        })
    }
}
export const getListUser = (params) => {
    return (dispatch) => {
        getUser.GET(params).then(res => {
            dispatch({
                type: 'GET_LISTUSER',
                payload: {
                    listUser: res.contents,
                    total_page: res.total_page,
                    totalItem: res.totalItem,
                }
            })
        })
    }
}
export const getListCategory = (params) => {
    return (dispatch) => {
        getCategory.GET(params).then(res => {
            dispatch({
                type: 'GET_LISTCATEGORY',
                payload: {
                    listCategory: res.contents,
                    total_page: res.total_page,
                    totalItem: res.totalItem,
                }
            })
        })
    }
}