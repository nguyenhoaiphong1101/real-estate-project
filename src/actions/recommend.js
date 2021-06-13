import { listRecommend } from "../api/recommend"


export const loadListRecommend = (params) => {
    return (dispatch) => {
        listRecommend.GET(params).then(res => {
            dispatch({
                type: 'LOAD_RECOMMEND',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}