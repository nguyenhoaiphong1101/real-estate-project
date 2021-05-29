
import { listHighlightApi } from "../api/highlightApi"

export const loadListHighlight = () => {
    return (dispatch) => {
        listHighlightApi.GET().then(res => {
            dispatch({
                type: 'LOAD_HIGHLIGHT',
                payload: res
            })
        })
    }
}