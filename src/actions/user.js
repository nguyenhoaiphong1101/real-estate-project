import { getFavorite, getPost, infoUser } from "../api/userApi"


export const getInfoUser = () => {
    return (dispatch) => {
        infoUser.GET().then(res => {
            dispatch({
                type: 'GET_INFOUSER',
                payload: res
            })
        })
    }
}
export const getPostUser = (params) => {
    return (dispatch) => {
        getPost.GET(params).then(res => {
            dispatch({
                type: 'GET_POSTUSER',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}
export const getFavoriteUser = (params) => {
    return (dispatch) => {
        getFavorite.GET(params).then(res => {
            dispatch({
                type: 'GET_FAVORITEUSER',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}
export const resetUser = () => {
    return {
        type: 'RESET_USER',
        payload: {
            user:{},
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
        }
    }
}