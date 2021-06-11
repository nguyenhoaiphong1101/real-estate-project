import axios from "axios"
import { identity } from "lodash";
import { AXIOS_INSTANCE } from "../config/interceptor";
import { API_URL } from "../constants/Config";


export const listSearch = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            data: null,
            params: params,
            url: API_URL + '/public/apartment/search',
        })
            .then(res => res.data.data
            )
    }
}