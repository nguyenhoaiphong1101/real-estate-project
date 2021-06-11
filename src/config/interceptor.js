import axios from "axios";
import { API_URL } from "../constants/Config";


export const AXIOS_INSTANCE = axios.create({
  baseURL: API_URL,
});

export const doAxiosRequestIntercept = () => {
    AXIOS_INSTANCE.interceptors.request.use(async (config) => {
      const token = await localStorage.getItem('access_token');;
      // const token = await jsCookie.get("lightening-access-token");
      const mConfig = {
        ...config,
        data: {
          // ...commonApiFields,
          ...config.data,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return mConfig;
})}