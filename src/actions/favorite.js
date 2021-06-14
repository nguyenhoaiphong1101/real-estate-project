import { postFavorite } from "../api/favorite"


export const favorite = () => {
    return (dispatch) => {
        postFavorite.GET().then(res => {
            dispatch({
                type: 'POST_FAVORITE',                payload: res
            })
        })
    }
}