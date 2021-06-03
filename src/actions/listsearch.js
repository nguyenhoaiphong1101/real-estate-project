import { listSearch } from "../api/listsearchApi"

export const loadListSearch = (page, size) => {
    return (dispatch) => {
        listSearch.GET(page, size).then(res => {
            dispatch({
                type: 'LOAD_LISTSEARCH',
                payload: res.contents,
                total_page: res.total_page,
                totalItem: res.totalItem
            })
        })
    }
}