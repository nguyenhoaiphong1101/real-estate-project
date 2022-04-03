import { API_URL } from "../constants/Config";
import { AXIOS_INSTANCE } from "../config/interceptor";

export const postFavorite = {
  POST: (id) => {
    return AXIOS_INSTANCE({
      method: "post",
      data: null,
      url: API_URL + `/apartment/${id}/favourite`,
    }).then((res) => res.data.data);
  },
};
