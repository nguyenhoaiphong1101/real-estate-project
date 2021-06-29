import axios from "axios"
import { API_URL } from "../constants/Config";


export const listSimilar = {

    GET: (params) => {
        return axios({
            method: 'get',
            params: params,
            data: null,
            url: API_URL + '/public/apartment/similar',
        })
            .then(res => res.data.data
            )
    }
}