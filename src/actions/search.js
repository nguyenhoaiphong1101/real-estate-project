
import { province, searchCity } from "../api/searchApi"

export const loadProvince = (id) => {
    return (dispatch) => {
        province.GET(id).then(res => {
            dispatch({
                type: 'LOAD_PROVINCE',
                payload: id ? res : []
            })
        })
    }
}

export const loadCountry = () => {
    return (dispatch) => {
        searchCity.GET().then(res => {
            dispatch({
                type: 'LOAD_COUNTRY',
                payload: res,
            })
        })
    }
}