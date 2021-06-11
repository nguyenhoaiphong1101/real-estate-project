import { infoUser } from "../api/userApi"


export const getInfoUser = (token) => {
    return (dispatch) => {
        infoUser.GET(token).then(res => {
            dispatch({
                type: 'GET_INFOUSER',
                payload: res
            })
        })
    }
}