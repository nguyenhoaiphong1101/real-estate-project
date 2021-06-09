import axios from "axios"
import { API_URL } from "../constants/Config";


export const listCategoryApi = {

    GET: () => {
        return axios({
            method: 'get',
            data: null,
            url: API_URL + '/public/all-category',
        })
            .then(res => res.data.data
            )
    }
}