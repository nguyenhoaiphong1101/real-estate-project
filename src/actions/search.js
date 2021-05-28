export const loadProvince = (id) => {
    return {
        type: 'LOAD_PROVINCE',
        payload: id,
    }
}
export const loadCountry = () => {
    return {
        type: 'LOAD_COUNTRY',
    }
}