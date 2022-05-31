export const selectPriceFrom = [
  {
    id: 1,
    label: "0",
    value: 0,
  },
  {
    id: 2,
    label: "1 triệu",
    value: 1000000,
  },
  {
    id: 3,
    label: "10 triệu",
    value: 10000000,
  },
  {
    id: 4,
    label: "100 triệu",
    value: 100000000,
  },
  {
    id: 5,
    label: "1 tỷ",
    value: 1000000000,
  },
  {
    id: 6,
    label: "5 tỷ",
    value: 5000000000,
  },
];
export const listSelectArea = [
  {
    id: 1,
    label: "Tất cả diện tích",
    value: "",
  },
  {
    id: 2,
    label: "30m2 - 50m2",
    value: "area_from=30&area_to=50",
  },
  {
    id: 3,
    label: "50m2 - 100m2",
    value: "area_from=50&area_to=100",
  },
  {
    id: 4,
    label: "100m2 - 150m2",
    value: "area_from=100&area_to=150",
  },
  {
    id: 5,
    label: "150m2 - 200m2",
    value: "area_from=150&area_to=200",
  },
  {
    id: 6,
    label: "200m2 - 250m2",
    value: "area_from=200&area_to=250",
  },
  {
    id: 7,
    label: "250m2 - 500m2",
    value: "area_from=250&area_to=500",
  },
  {
    id: 8,
    label: "500m2 - 750m2",
    value: "area_from=500&area_to=750",
  },
  {
    id: 9,
    label: "750m2 - 1000m2",
    value: "area_from=750&area_to=1000",
  },
  {
    id: 10,
    label: ">= 1000m2",
    value: "area_from=1000",
  },
];
export const selectPriceTo = [
  {
    id: 2,
    label: "1 triệu",
    value: 1000000,
  },
  {
    id: 3,
    label: "10 triệu",
    value: 10000000,
  },
  {
    id: 4,
    label: "100 triệu",
    value: 100000000,
  },
  {
    id: 5,
    label: "1 tỷ",
    value: 1000000000,
  },
  {
    id: 6,
    label: "5 tỷ",
    value: 5000000000,
  },
  {
    id: 7,
    label: "10 tỷ",
    value: 10000000000,
  },
  {
    id: 8,
    label: "> 10 tỷ",
    value: -1,
  },
];
export const selectAreaFrom = [
  {
    id: 1,
    label: "0",
    value: 0,
  },
  {
    id: 2,
    label: "10m2",
    value: 10,
  },
  {
    id: 3,
    label: "50m2",
    value: 50,
  },
  {
    id: 4,
    label: "100m2",
    value: 100,
  },
  {
    id: 5,
    label: "200m2",
    value: 200,
  },
  {
    id: 6,
    label: "500m2",
    value: 500,
  },
];
export const selectAreaTo = [
  {
    id: 1,
    label: "0",
    value: 0,
  },
  {
    id: 2,
    label: "10m2",
    value: 10,
  },
  {
    id: 3,
    label: "50m2",
    value: 50,
  },
  {
    id: 4,
    label: "100m2",
    value: 100,
  },
  {
    id: 5,
    label: "200m2",
    value: 200,
  },
  {
    id: 6,
    label: "500m2",
    value: 500,
  },
  {
    id: 7,
    label: "1000m2",
    value: 1000,
  },
  {
    id: 8,
    label: "> 1000m2",
    value: -1,
  },
];

export const listProvinceDemo = [
  {
    value: 1,
    label: "Hồ chí minh",
  },
  {
    value: 2,
    label: "Hà nội",
  },
  {
    value: 3,
    label: "Bà Rịa Vũng Tàu",
  },
  {
    value: 4,
    label: "Quảng Nam",
  },
  {
    value: 5,
    label: "Nha Trang",
  },
];

export const listMapSort = [
  {
    value: "ID",
    sort: {
      sort_by: "",
      sort_direction: "",
    },
  },
  {
    value: "AREA_ASC",
    sort: {
      sort_by: "AREA",
      sort_direction: "ASC",
    },
  },
  {
    value: "AREA_DESC",
    sort: {
      sort_by: "AREA",
      sort_direction: "DESC",
    },
  },
  {
    value: "TOTAL_PRICE_ASC",
    sort: {
      sort_by: "TOTAL_PRICE",
      sort_direction: "ASC",
    },
  },
  {
    value: "TOTAL_PRICE_DESC",
    sort: {
      sort_by: "TOTAL_PRICE",
      sort_direction: "DESC",
    },
  },
];
