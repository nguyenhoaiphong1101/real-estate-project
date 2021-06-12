
import { listHighlightApi } from "../api/highlightApi"

export const loadListHighlight = (params) => {
    return (dispatch) => {
        listHighlightApi.GET(params).then(res => {
            dispatch({
                type: 'LOAD_HIGHLIGHT',
                payload: res
            })
        })
    }
}