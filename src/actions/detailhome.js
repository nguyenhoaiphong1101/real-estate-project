import { detailHomeApi } from "../api/detailhome"


export const loadDetailHome = (id, user_id) => {
    return (dispatch) => {
        detailHomeApi.GET(id, user_id).then(res => {
            dispatch({
                type: 'LOAD_DETAILHOME',
                payload: res
            })
        })
    }
}