import { getApartment, getCategory, getDetailUser, getUser } from "../api/adminApi"


export const getListApartment = (params) => {
    return (dispatch) => {
        getApartment.GET(params).then(res => {
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
export const getUserDetail = (id) => {
    return (dispatch) => {
        getDetailUser.GET(id).then(res => {
            dispatch({
                type: 'GET_DETAILUSER',
                payload: res
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