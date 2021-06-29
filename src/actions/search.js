
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
    if (id) {
        return (dispatch) => {
            district.GET(id).then(res => {
                dispatch({
                    type: 'LOAD_DISTRICT',
                    payload: res
                })
            })
        }
    } else {
        return {
            type: 'RESET_DISTRICT',
            payload: []
        }
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