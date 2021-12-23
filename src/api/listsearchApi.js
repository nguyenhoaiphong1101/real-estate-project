import axios from "axios"
import { identity } from "lodash";
import { AXIOS_INSTANCE } from "../config/interceptor";
import { API_URL } from "../constants/Config";


export const listSearch = {

    GET: (params) => {
        return axios({
            method: 'get',
            data: null,
            params: params,
            url: API_URL + '/public/apartment/search',
        })
            .then(res => res.data.data
            )
    }
}
export const listSearchCompare = {

    GET: () => {
        return axios({
            method: 'get',
            data: null,
            url: API_URL + '/public/apartment/search/all',
        })
            .then(res => res.data.data
            )
    }
}