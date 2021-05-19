import axios from "axios"
import { API_URL } from "../constants/Config";

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



const loginApi = {

    POST: (value) => {
        return axios({
            method: 'post',
            data: { ...value },
            url: API_URL + '/auth/login',
        })
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);
            })
            .catch(err => {
                window.alert(err.response.data?.message);
            })
    }
}

export default loginApi;
