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

    PUT: (body) => {
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
export const changePasswordUser = {

    PUT: (body) => {
        return AXIOS_INSTANCE({
            method: 'put',
            data: body,
            url: API_URL + '/auth/change-password',
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
            params: {
                ...params,
                size: 10,
            },
            url: API_URL + '/user/token/apartment/author',
        }).then(res => res.data.data
        )
    }
}
export const deletePost = {

    DELETE: (id) => {
        return AXIOS_INSTANCE({
            method: 'delete',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            url: API_URL + `/delete/${id}/`,
        })
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


export const getTarget = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/user/token/target',
        }).then(res => res.data.data
        )
    }
}

export const createTarget = {

    POST: (body) => {
        return AXIOS_INSTANCE({
            method: 'post',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + '/user/token/target',
        })
            .then(res => {
                message.success("Thêm mục tiêu thành công !");
            })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}

export const updateTarget = {
    PUT: (body) => {
        return AXIOS_INSTANCE({
            method: 'put',
            data: body,
            url: API_URL + '/user/token/target',
        }).then(res => {
            message.success("Cập nhật mục tiêu thành công !");
        })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}

export const deleteTarget = {

    DELETE: (id) => {
        return AXIOS_INSTANCE({
            method: 'delete',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            url: API_URL + `/user/token/target`,
        })
    }
}



