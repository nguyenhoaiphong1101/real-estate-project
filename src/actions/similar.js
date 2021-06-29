import { listSimilar } from "../api/similarApi"


export const loadListSimilar = (params) => {
    return (dispatch) => {
        listSimilar.GET(params).then(res => {
            dispatch({
                type: 'LOAD_SIMILAR',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}