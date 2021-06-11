
import { country, district, province } from "../api/searchApi"

export const loadProvince = () => {
    return (dispatch) => {
        province.GET().then(res => {
            dispatch({
                type: 'LOAD_PROVINCE',
                payload: res,
            })
        })
    }
}

export const loadDistrict = (id) => {
    return (dispatch) => {
        district.GET(id).then(res => {
            dispatch({
                type: 'LOAD_DISTRICT',
                payload: id ? res : []
            })
        })
    }
}

export const loadCountry = () => {
    return (dispatch) => {
        country.GET().then(res => {
            dispatch({
                type: 'LOAD_COUNTRY',
                payload: res,
            })
        })
    }
}