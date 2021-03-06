import axios from "axios"
import { API_URL } from "../constants/Config";


export const listRecommend = {

    GET: (params) => {
        return axios({
            method: 'get',
            params: {
                ...params,
                size: 10
            },
            data: null,
            url: API_URL + '/public/apartment/recommend',
        })
            .then(res => res.data.data
            )
    }
}