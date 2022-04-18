export const API_URL = "http://c7c3-118-69-231-9.ngrok.io/api";

export const price = [
  {
    key: 2,
    label: "< 500 triệu",
    value: objectToQueryString({
      from: 0,
      to: 500000000,
    }),
  },
  {
    key: 3,
    label: "500 - 800 triệu",
    value: objectToQueryString({
      from: 500000000,
      to: 800000000,
    }),
  },
  {
    key: 4,
    label: "800 triệu - 1 tỷ",
    value: objectToQueryString({
      from: 800000000,
      to: 1000000000,
    }),
  },
  {
    key: 5,
    label: "1 - 2 tỷ",
    value: objectToQueryString({
      from: 1000000000,
      to: 2000000000,
    }),
  },
  {
    key: 6,
    label: "2 - 3 tỷ",
    value: objectToQueryString({
      from: 2000000000,
      to: 3000000000,
    }),
  },
  {
    key: 7,
    label: "3 - 5 tỷ",
    value: objectToQueryString({
      from: 3000000000,
      to: 5000000000,
    }),
  },
  {
    key: 8,
    label: "5 - 7 tỷ",
    value: objectToQueryString({
      from: 5000000000,
      to: 7000000000,
    }),
  },
  {
    key: 9,
    label: "7 - 10 tỷ",
    value: objectToQueryString({
      from: 7000000000,
      to: 10000000000,
    }),
  },
  {
    key: 10,
    label: "10 - 20 tỷ",
    value: objectToQueryString({
      from: 10000000000,
      to: 20000000000,
    }),
  },
  {
    key: 11,
    label: "20 - 30 tỷ",
    value: objectToQueryString({
      from: 20000000000,
      to: 30000000000,
    }),
  },
  {
    key: 12,
    label: "> 30 tỷ",
    value: objectToQueryString({
      from: 3000000000,
      to: -1,
    }),
  },
];

export const acreage = [
  {
    key: 2,
    label: "<= 30 m2",
    from: 0,
    to: 30,
  },
  {
    key: 3,
    label: "30 - 50 m2",
    value: objectToQueryString({
      from: 30,
      to: 50,
    }),
  },
  {
    key: 4,
    label: "50 - 80 m2",
    value: objectToQueryString({
      from: 50,
      to: 80,
    }),
  },
  {
    key: 5,
    label: "80 - 100 m2",
    value: objectToQueryString({
      from: 80,
      to: 100,
    }),
  },
  {
    key: 6,
    label: "100 - 150 m2",
    value: objectToQueryString({
      from: 100,
      to: 150,
    }),
  },
  {
    key: 7,
    label: "150 - 200 m2",
    value: objectToQueryString({
      from: 150,
      to: 200,
    }),
  },
  {
    key: 8,
    label: "200 - 250 m2",
    value: objectToQueryString({
      from: 200,
      to: 250,
    }),
  },
  {
    key: 9,
    label: "250 - 300 m2",
    value: objectToQueryString({
      from: 250,
      to: 300,
    }),
  },
  {
    key: 10,
    label: "300 - 500 m2",
    value: objectToQueryString({
      from: 300,
      to: 500,
    }),
  },
  {
    key: 11,
    label: ">= 500 m2",
    value: objectToQueryString({
      from: 500,
      to: -1,
    }),
  },
];

export const quantity = [
  {
    key: "any",
    value: 0,
    label: "Any",
  },
  {
    key: 1,
    value: 1,
    label: 1,
  },
  {
    key: 2,
    value: 2,
    label: 2,
  },
  {
    key: 3,
    value: 3,
    label: 3,
  },
  {
    key: 4,
    value: 4,
    label: 4,
  },
  {
    key: 5,
    value: 5,
    label: 5,
  },
  {
    key: 6,
    value: -1,
    label: "> 5",
  },
];

export function objectToQueryString(obj) {
  const queryString = new URLSearchParams(obj).toString();
  return queryString;
}

export const listDemoProduct = [
  {
    id: 1,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 2,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 3,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 4,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 5,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 6,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
  {
    id: 7,
    status: "OPEN",
    type_apartment: "Bán",
    author: {
      full_name: "Nguyễn Hoài Phong",
    },
    created_at: "11/01/2000",
    address: "Quận 7 Thành phố Hồ Chí Minh",
    total_price: 4000000000,
    title:
      "Biệt thự đầy đủ tiện nghi cần bán gấp thự đầy đủ tiện nghi cần bán gấp",
    bedroom_quantity: 4,
    bathroom_quantity: 3,
    area: 500,
  },
];
