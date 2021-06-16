import axios from "axios"
import { API_URL } from "../constants/Config";
import { message } from 'antd';
import { AXIOS_INSTANCE } from "../config/interceptor";


export const createPost = {

    POST: (body) => {
        return AXIOS_INSTANCE({
            method: 'POST',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + '/apartment/create',
        }).then(res => {
            message.success("Success!");
        })
            .catch(err => {
                message.error(err.message);
            })
    }
}
export const updatePost = {

    PUT: (body, id) => {
        return AXIOS_INSTANCE({
            method: 'put',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + `/apartment/${id}/update`,
        }).then(res => {
            message.success("Success!");
        }).catch(err => {
            message.error(err.response.data.message);
        })
    }
}