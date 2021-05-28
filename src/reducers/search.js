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
            return {
                ...state,
                province: action.payload,
            };
        }
        case 'LOAD_COUNTRY': {
            return {
                ...state,
                country: action.payload,
            };
        }
        default:
            return state;
    }
}

export default SearchReducer;