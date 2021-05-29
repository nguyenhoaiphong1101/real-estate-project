import axios from "axios"
import { API_URL } from "../constants/Config";


export const listLatestNew = {

    GET: () => {
        return axios({
            method: 'get',
            data: null,
            url: API_URL + '/public/apartment/latest-new',
        })
            .then(res => res.data.data
            )
    }
}