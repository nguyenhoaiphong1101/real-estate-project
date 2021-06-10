
export const loadListFilter = (valueCategory, valueCountry, valueProvince, valuePrice, valueArea) => {
    return {
        type: 'LOAD_LISTFILTER',
        payload: {
            valueCategory: valueCategory,
            valueCountry: valueCountry,
            valueProvince: valueProvince,
            valuePrice: valuePrice,
            valueArea: valueArea,
        }
    }
}