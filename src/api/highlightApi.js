import axios from "axios"
import { API_URL } from "../constants/Config";


export const listHighlightApi = {

    GET: (params) => {
        return axios({
            method: 'get',
            data: null,
            params:params,
            url: API_URL + '/public/apartment/highlight',
        })
            .then(res => res.data.data
            )
    }
}