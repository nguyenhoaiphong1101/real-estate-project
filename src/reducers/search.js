import { resolveOnChange } from "antd/lib/input/Input";
import { useState, useEffect } from "react";
import { province, searchCity } from "../api/searchApi"

const initialState = {
    country: [],
    province: [],
}




var listTempCountry = [];
const setListCountry = (list) => {
    listTempCountry = list;
}
var listTempProvince = [];
const setListProvince = (list) => {
    listTempProvince = list;
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PROVINCE': {
            province.GET(action.payload).then(res => setListProvince(res))
            return {
                ...state,
                province: listTempProvince,
            };
        }
        case 'LOAD_COUNTRY': {

            searchCity.GET().then(res => setListCountry(res))
            return {
                ...state,
                country: listTempCountry,
            };
        }
        default:
            return state;
    }
}

export default SearchReducer;