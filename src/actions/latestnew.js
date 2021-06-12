import { listLatestNew } from "../api/latestnewApi"

export const loadListLatestNew = (params) => {
    return (dispatch) => {
        listLatestNew.GET(params).then(res => {
            dispatch({
                type: 'LOAD_LATESTNEW',
                payload: res
            })
        })
    }
}