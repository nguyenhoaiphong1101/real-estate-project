import axios from "axios"
import { API_URL } from "../constants/Config"
import { AXIOS_INSTANCE } from "../config/interceptor";

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