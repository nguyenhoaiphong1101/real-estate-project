import axios from "axios"
import { identity } from "lodash";
import { API_URL } from "../constants/Config";


export const listSearch = {

    GET: (page, size, sort_by, sort_direction) => {
        return axios({
            method: 'get',
            data: null,
            params: {
                page: page,
                size: size,
                sort_by: 'id',
                sort_direction: 'DESC'
            },
            url: API_URL + '/public/apartment/search',
        })
            .then(res => res.data
            )
    }
}