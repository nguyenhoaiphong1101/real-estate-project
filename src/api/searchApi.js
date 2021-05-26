import axios from "axios"
import { API_URL } from "../constants/Config";


export const searchCity = {

    GET: () => {
        return axios({
            method: 'get',
            data: null,
            url: API_URL + '/location/province/country',
        })
            .then(res => res.data.data
            )
    }
}
export const province = {

    GET: (params) => {
        return axios({
            method: 'get',
            params: {
                province_id: params,
            },
            data: null,
            url: API_URL + '/location/district/province',
        })
            .then(res => res.data.data
            )
    }
}



// export const searchProvince = {

//     GET: () => {
//         return axios({
//             method: 'get',
//             data: { ...value },
//             url: API_URL + '/auth/login',
//         })
//             .then(res => res.data
//             )
//     }
// }
