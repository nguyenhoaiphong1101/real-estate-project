import axios from "axios"
import { API_URL } from "../constants/Config";


export const detailHomeApi = {

    GET: (id, user_id) => {
        return axios({
            method: 'get',
            data: null,
            params: {
                user_id: user_id
            },
            url: API_URL + `/public/apartment/${id}`,
        })
            .then(res => res.data.data
            )
    }
}