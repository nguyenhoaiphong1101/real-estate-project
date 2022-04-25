import axios from "axios"
import { API_URL } from "../constants/Config";
import jwt_decode from "jwt-decode";
import { message } from 'antd';

// const loginApi = {
//     POST: () => {
//         const url = '/auth/login';
//         return axiosClient(url, 'POST', {
//             username: "admin",
//             password: "123"
//         }
//         )
//     },
//     Get: () => {
//         const url = '/auth/login';
//         return axiosClient(url, 'POST', {
//             username: "admin",
//             password: "123"
//         }
//         )
//     },
// }
// export default loginApi;



export const loginApi = {

    POST: (value, loginSuccess) => {
        return axios({
            method: 'post',
            data: { ...value },
            url: API_URL + '/auth/login',
        })
            .then(res => {
                const access_token = res.data.access_token;
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('role', jwt_decode(access_token).role);
                localStorage.setItem('user', jwt_decode(access_token).id);
                message.success("Success!");
                loginSuccess(jwt_decode(access_token).role)
            })
            .catch(err => {
                message.error(err.response?.data?.message);
            })
    }
}
