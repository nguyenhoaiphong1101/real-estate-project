import axios from "axios"
import { API_URL } from "../constants/Config";


export const listRecommend = {

    GET: (params) => {
        return axios({
            method: 'get',
            params:params,
            data: null,
            url: API_URL + '/public/apartment/recommend',
        })
            .then(res => res.data.data
            )
    }
}