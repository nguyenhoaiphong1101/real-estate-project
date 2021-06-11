import axios from "axios"
import { API_URL } from "../constants/Config";
import { message } from 'antd';


export const infoUser = {

    GET: (token) => {
        return axios({
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: null,
            url: API_URL + '/user/token',
        })
            .then(res => res.data.data
            )
    }
}
export const updateUser = {

    PUT: (token, body) => {
        return axios({
            method: 'put',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: body,
            url: API_URL + '/user/token/update',
        }).then(res => {
            message.success("Lưu thành công !");
        })
            .catch(err => {
                message.error("Lưu thất bại !");
            })
    }
}