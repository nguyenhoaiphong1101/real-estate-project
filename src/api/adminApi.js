import axios from "axios"
import { API_URL } from "../constants/Config"
import { AXIOS_INSTANCE } from "../config/interceptor";
import { message } from "antd";

export const getApartment = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/dashboard/apartment/search',
        })
            .then(res => res.data.data
            )
    }
}
export const createApartment = {

    POST: (body) => {
        return AXIOS_INSTANCE({
            method: 'post',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + '/dashboard/apartment/create',
        }).then(res => {
            message.success("Success!");
        })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}
export const validateApartment = {

    POST: (params, id) => {
        return AXIOS_INSTANCE({
            method: 'post',
            params: params,
            data: null,
            url: API_URL + `/dashboard/apartment/${id}/validate`,
        })
    }
}
export const highlightApartment = {

    POST: (id) => {
        return AXIOS_INSTANCE({
            method: 'post',
            data: null,
            url: API_URL + `/dashboard/apartment/validate/highlight/${id}/`,
        })
    }
}
export const closeApartment = {

    POST: (id) => {
        return AXIOS_INSTANCE({
            method: 'post',
            data: null,
            url: API_URL + `/dashboard/apartment/close/${id}/`,
        })
    }
}
export const updateApartment = {

    PUT: (body, id) => {
        return AXIOS_INSTANCE({
            method: 'put',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + `/dashboard/apartment/${id}/update`,
        }).then(res => {
            message.success("Success!");
        })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}
export const getUser = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/dashboard/user/search',
        })
            .then(res => res.data.data
            )
    }
}
export const getCategory = {

    GET: (params) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            params: params,
            url: API_URL + '/dashboard/category',
        })
            .then(res => res.data.data
            )
    }
}
export const postCategory = {

    POST: (body) => {
        return AXIOS_INSTANCE({
            method: 'post',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + '/dashboard/category/create',
        })
            .then(res => res.data.data
            )
    }
}
export const deleteCategory = {

    DELETE: (id) => {
        return AXIOS_INSTANCE({
            method: 'delete',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            url: API_URL + `/dashboard/category/delete/${id}`,
        })
    }
}
export const putCategory = {

    PUT: (body, id) => {
        return AXIOS_INSTANCE({
            method: 'put',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: body,
            url: API_URL + `/dashboard/category/update/${id}`,
        })
    }
}

export const getDetailUser = {

    GET: (id) => {
        return AXIOS_INSTANCE({
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            data: null,
            url: API_URL + `/dashboard/user/apartment/${id}`,
        })
            .then(res => res.data.data
            )
    }
}