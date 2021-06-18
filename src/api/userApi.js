import axios from "axios"
import { API_URL } from "../constants/Config";
import { message } from 'antd';
import { AXIOS_INSTANCE } from "../config/interceptor";


export const infoUser = {

    GET: () => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            url: API_URL + '/user/token',
        })
            .then(res => res.data.data
            )
    }
}
export const updateUser = {

    PUT: ( body) => {
        return AXIOS_INSTANCE({
            method: 'put',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + '/user/token/update',
        }).then(res => {
            message.success("Success!");
        })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}
export const getPost = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/user/token/apartment/author',
        }).then(res => res.data.data
            )
    }
}
export const getFavorite = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/user/token/apartment/favourite',
        }).then(res => res.data.data
            )
    }
}
