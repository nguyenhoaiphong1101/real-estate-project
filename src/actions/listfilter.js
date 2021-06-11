
export const loadListFilter = (valueCategory, valueProvince, valueDistrict, valuePrice, valueArea) => {
    return {
        type: 'LOAD_LISTFILTER',
        payload: {
            valueCategory: valueCategory,
            valueProvince: valueProvince,
            valueDistrict: valueDistrict,
            valuePrice: valuePrice,
            valueArea: valueArea,
        }
    }
}