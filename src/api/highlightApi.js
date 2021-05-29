import axios from "axios"
import { API_URL } from "../constants/Config";


export const listHighlightApi = {

    GET: () => {
        return axios({
            method: 'get',
            data: null,
            url: API_URL + '/public/apartment/highlight',
        })
            .then(res => res.data.data
            )
    }
}