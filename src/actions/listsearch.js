import { listSearch } from "../api/listsearchApi"

export const loadListSearch = (params) => {
    return (dispatch) => {
        listSearch.GET(params).then(res => {
            dispatch({
                type: 'LOAD_LISTSEARCH',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}