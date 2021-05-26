import { useState } from "react";
import { province } from "../api/searchApi"

const initialState = {
    country: [],
    province: [],
}

const searchReducer = (state = initialState, action) => {

    const [listProvince, setListProvince] = useState([]);
    switch (action.type) {
        case 'LOAD_PROVINCE': {
            setListProvince(province.GET(action.payload).then(res => res));
            return {
                ...state,
                province: listProvince,
            };
        }
        default:
            return state;
    }
}

export default searchReducer;