import { message } from "antd";
import axios from "axios";
import { API_URL } from "../constants/Config";

export const signupApi = {

    POST: (body) => {
        return axios({
            method: 'post',
            data: body,
            url: API_URL + '/auth/register',
        })
            .then(res => {
                message.success("Success!");
            })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}
