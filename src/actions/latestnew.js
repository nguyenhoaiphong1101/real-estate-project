import { listLatestNew } from "../api/latestnewApi"

export const loadListLatestNew = () => {
    return (dispatch) => {
        listLatestNew.GET().then(res => {
            dispatch({
                type: 'LOAD_LATESTNEW',
                payload: res
            })
        })
    }
}