import { listCategoryApi } from "../api/category"


export const loadListCategory = () => {
    return (dispatch) => {
        listCategoryApi.GET().then(res => {
            dispatch({
                type: 'LOAD_CATEGORY',
                payload: res
            })
        })
    }
}