import React, { useEffect, useState } from 'react';
import "./styles.scss"
import { Table, Tag, Space, Row, Col, Input, Modal, Upload, Form, message, DatePicker } from 'antd';
import { Select } from 'antd';
import { getListApartment } from '../../../../../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd/lib/radio';
import { Option } from 'antd/lib/mentions';
import { AlignLeftOutlined, PlusOutlined } from '@ant-design/icons';
import HTMLEditor from '../../../../../components/HTMLEditor';
import { loadDistrict, loadProvince } from '../../../../../actions/search';
import { loadListCategory } from '../../../../../actions/category';
import axios from 'axios';
import { API_URL } from '../../../../../constants/Config';
import moment from 'moment';
import { closeApartment, createApartment, highlightApartment, updateApartment, validateApartment } from '../../../../../api/adminApi';
import { loadDetailHome, resetDetail } from '../../../../../actions/detailhome';



function ManageApartment(props) {
    const columns = [
        {
            title: 'STT',
            key: 'id',
            render: (text, record) => <td>{
                listApartment.map((item, index) => {
                    if (item.id === record.id) {
                        return index + (params.page - 1) * 10 + 1
                    }
                })
            }</td>,
            width: 30,
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'id',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'id',
        },
        {
            title: 'Diện tích',
            dataIndex: 'area',
            key: 'id',
            width: 100,
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'total_price',
            key: 'id',
        },
        {
            title: 'Nổi bật',
            dataIndex: 'is_highlight',
            key: 'id',
            width: 100,
            render: (text, record) => record?.is_highlight ? <i style={{ color: 'yellow', cursor: "pointer" }} onClick={() => changeHighlight(record)} class="fas fa-star"></i> : <i onClick={() => changeHighlight(record)} style={{ color: 'yellow', cursor: "pointer" }} class="far fa-star"></i>
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'id',
            width: 100,
            render: status => <Tag color={status === "OPEN" ? "green" : status === "PENDING" ? "geekblue" : "volcano"}>
                {status}
            </Tag>
        },
        {
            title: 'Tình trạng',
            dataIndex: 'type_apartment',
            key: 'id',
            width: 100,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button className="admin-btn-edit" onClick={() => showModalChange(record)}>Sửa</Button>
                    {text.status === "CLOSE" ? <Button className="admin-btn-approve" onClick={() => showModalReset(record)}>Mở lại</Button> : <Button className="admin-btn-delete" onClick={() => showModalNoti(record)}>Xóa</Button>}
                    {text.status === "PENDING" ? <Button className="admin-btn-approve" onClick={() => showModalStatus(record)}>Duyệt</Button> : null}
                </Space>
            ),
            width: 240,
        },
    ];

    const price = [
        {
            id: 2,
            name: '< 500 triệu',
            from: -1,
            to: 500000000,
        },
        {
            id: 3,
            name: '500 - 800 triệu',
            from: 500000000,
            to: 800000000,
        },
        {
            id: 4,
            name: '800 triệu - 1 tỷ',
            from: 800000000,
            to: 1000000000,
        },
        {
            id: 5,
            name: '1 - 2 tỷ',
            from: 1000000000,
            to: 2000000000,
        },
        {
            id: 6,
            name: '2 - 3 tỷ',
            from: 2000000000,
            to: 3000000000,
        },
        {
            id: 7,
            name: '3 - 5 tỷ',
            from: 3000000000,
            to: 5000000000,
        },
        {
            id: 8,
            name: '5 - 7 tỷ',
            from: 5000000000,
            to: 7000000000,
        },
        {
            id: 9,
            name: '7 - 10 tỷ',
            from: 7000000000,
            to: 10000000000,
        },
        {
            id: 10,
            name: '10 - 20 tỷ',
            from: 10000000000,
            to: 20000000000,
        },
        {
            id: 11,
            name: '20 - 30 tỷ',
            from: 20000000000,
            to: 30000000000,
        },
        {
            id: 12,
            name: '> 30 tỷ',
            from: 3000000000,
            to: -1,
        },
    ]

    const acreage = [

        {
            id: 2,
            name: '<= 30 m2',
            from: -1,
            to: 30,
        },
        {
            id: 3,
            name: '30 - 50 m2',
            from: 30,
            to: 50,
        },
        {
            id: 4,
            name: '50 - 80 m2',
            from: 50,
            to: 80,
        },
        {
            id: 5,
            name: '80 - 100 m2',
            from: 80,
            to: 100,
        },
        {
            id: 6,
            name: '100 - 150 m2',
            from: 100,
            to: 150,
        },
        {
            id: 7,
            name: '150 - 200 m2',
            from: 150,
            to: 200,
        },
        {
            id: 8,
            name: '200 - 250 m2',
            from: 200,
            to: 250,
        },
        {
            id: 9,
            name: '250 - 300 m2',
            from: 250,
            to: 300,
        },
        {
            id: 10,
            name: '300 - 500 m2',
            from: 300,
            to: 500,
        },
        {
            id: 11,
            name: '>= 500 m2',
            from: 500,
            to: -1,
        },
    ]

    const changeHighlight = async (record) => {
        await highlightApartment.POST(record.id)
        dispatch(getListApartment(params))
    }

    const [isChange, setIsChange] = useState(false);

    const token = localStorage.getItem('access_token');
    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;
    const [params, setParams] = useState({
        sort_direction: "ASC",
        sort_by: '',//
        status: '',//
        type_apartment: '',//
        size: 10,//
        page: 1,//
        search: '',//
        province_id: undefined,//
        price_to: undefined,
        price_from: undefined,
        district_id: undefined,//
        category_id: undefined,//
        area_to: undefined,
        area_from: undefined,
    });

    async function callApiImage() {
        const bodyFormData = new FormData();
        let imgFiles = [];
        let result = [];
        fileList.forEach((file) => {
            if (!file.file) {
                result.push({
                    originalName: file.originalName,
                    name: file.name,
                    extension: file.extension,
                });
            }
        });
        fileList.forEach((file) => {
            if (file.file) {
                imgFiles.push(file.file);
            }
        });

        if (imgFiles.length !== 0 && isChange === true) {
            setIsChange(false);
            for (let i = 0; i < imgFiles.length; i++) {
                bodyFormData.append("files", imgFiles[i]);
            }
            await axios
                .request({
                    url: API_URL + '/upload/photo',
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    data: bodyFormData,
                })
                .then((res) => {
                    // bodyFormData.delete("files");
                    res.data.data.forEach((file) => {
                        result.push({
                            originalName: file.originalName,
                            name: file.name,
                            extension: file.extension,
                        });
                        // result.push({
                        //     originalName: file.originalName,
                        //     name: file.name,
                        //     extension: file.extension,
                        // });
                    });

                })
        }

        return result;
    }



    const [formMain] = Form.useForm();
    const [formFilter] = Form.useForm();

    const listDistrict = useSelector(state => state.search.district);
    const listProvince = useSelector(state => state.search.province);
    const listCategory = useSelector(state => state.category.listCategory)
    const detailHome = useSelector(state => state.detailhome.detailHome)





    const setValueProvince = (value) => {
        formMain.setFieldsValue({ province: value, district: null })
        dispatch(loadDistrict(value));
    }

    const setValueCategory = (value) => {
        formMain.setFieldsValue({ category: value })
    }
    const setValueDistrict = (value) => {
        formMain.setFieldsValue({ district: value })
    }
    const setValueTypeApartment = (value) => {
        formMain.setFieldsValue({ type_apartment: value })
    }


    const setValueProvinceFilter = (value) => {
        formFilter.setFieldsValue({ province: value, district: null })
        dispatch(loadDistrict(value));
    }

    const setValueCategoryFilter = (value) => {
        formFilter.setFieldsValue({ category: value })
    }
    const setValueDistrictFilter = (value) => {
        formFilter.setFieldsValue({ district: value })
    }
    const setValueTypeApartmentFilter = (value) => {
        formFilter.setFieldsValue({ type_apartment: value })
    }
    const setValueStatusFilter = (value) => {
        formFilter.setFieldsValue({ status: value })
    }



    const [typeButton, setTypeButton] = useState('');

    const [isModalVisibleFilter, setIsModalVisibleFilter] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleStatus, setIsModalVisibleStatus] = useState(false);

    const showModalAdd = () => {
        setTypeButton("ADD");
        setIsModalVisible(true);
    };
    const showModalChange = (record) => {
        dispatch(loadDetailHome(record.id))
        setIsModalVisible(true);
        setTypeButton("CHANGE");
    };
    const showModalStatus = (record) => {
        setIdTemp(record.id);
        setIsModalVisibleStatus(true);
    };
    const showModalReset = (record) => {
        setIdTemp(record.id);
        setIsVisibleNotiReset(true);
    };


    useEffect(async () => {
        await dispatch(loadDistrict(detailHome?.addressDetail?.province_id));
        formMain.setFieldsValue({
            address: detailHome?.addressDetail?.address,
            balcony_direction: detailHome?.apartment_detail?.balcony_direction,
            bathroom_quantity: detailHome?.apartment_detail?.bathroom_quantity,
            bedroom_quantity: detailHome?.apartment_detail?.bedroom_quantity,
            description: detailHome?.apartment_detail?.description,
            entrance_building: detailHome?.apartment_detail?.entrance_building,
            floor_quantity: detailHome?.apartment_detail?.floor_quantity,
            front_building: detailHome?.apartment_detail?.front_building,
            furniture: detailHome?.apartment_detail?.furniture,
            house_direction: detailHome?.apartment_detail?.house_building,
            toilet_quantity: detailHome?.apartment_detail?.toilet_quantity,
            area: detailHome?.area,
            expired_date: moment(detailHome?.expired_date),
            overview: detailHome?.overview,
            title: detailHome?.title,
            total_price: detailHome?.total_price,
            district: detailHome?.addressDetail?.district_id,
            province: detailHome?.addressDetail?.province_id,
            category: detailHome?.category_id,
            type_apartment: detailHome?.type_apartment === 'Bán' ? 'BUY' : 'RENT',
        })

        setDescriptionEditor(detailHome?.apartment_detail?.description);
        let imgs = [];
        detailHome.photos?.forEach((item, index) => {
            imgs.push({
                ...item,
                uid: index,
                url: getPhotosImg(item.name),

            });
        });
        setFileList(imgs);
    }, [detailHome]);

    const addApartment = async () => {
        let listphoto = await callApiImage();

        const dataForm = formMain.getFieldValue();

        if (listphoto.length === 0) {
            message.error("Vui lòng chọn hình ảnh !")
        } else {
            const dataPost = {
                apartment_address: {
                    address: dataForm.address,
                    country_code: "VN",
                    district_id: dataForm.district,
                    province_id: dataForm.province,
                },
                apartment_detail: {
                    balcony_direction: dataForm.balcony_direction,
                    bathroom_quantity: dataForm.bathroom_quantity,
                    bedroom_quantity: dataForm.bedroom_quantity,
                    description: descriptionEditor,
                    entrance_building: dataForm.entrance_building,
                    floor_quantity: dataForm.floor_quantity,
                    front_building: dataForm.front_building,
                    furniture: dataForm.furniture,
                    house_direction: dataForm.house_direction,
                    toilet_quantity: dataForm.toilet_quantity
                },
                area: dataForm.area,
                category_id: dataForm.category,
                expired_date: moment(dataForm.expired_date).format("YYYY-MM-DDTHH:mm:ss") + 'Z',
                overview: dataForm.overview,
                title: dataForm.title,
                total_price: dataForm.total_price,
                type_apartment: dataForm.type_apartment,
                photos: listphoto,
            }
            createApartment.POST(dataPost);
            formMain.resetFields();
            setFileList([]);
            setDescriptionEditor('');
            setIsModalVisible(false);
        }
    };

    const changeApartment = async () => {
        let listphoto = [];
        await callApiImage().forEach((item) => {
            listphoto.push(item);
        });

        const dataForm = formMain.getFieldValue();

        if (listphoto.length === 0) {
            message.error("Vui lòng chọn hình ảnh !")
        } else {
            const dataPost = {
                apartment_address: {
                    address: dataForm.address,
                    country_code: "VN",
                    district_id: dataForm.district,
                    province_id: dataForm.province,
                },
                apartment_detail: {
                    balcony_direction: dataForm.balcony_direction,
                    bathroom_quantity: dataForm.bathroom_quantity,
                    bedroom_quantity: dataForm.bedroom_quantity,
                    description: descriptionEditor,
                    entrance_building: dataForm.entrance_building,
                    floor_quantity: dataForm.floor_quantity,
                    front_building: dataForm.front_building,
                    furniture: dataForm.furniture,
                    house_direction: dataForm.house_direction,
                    toilet_quantity: dataForm.toilet_quantity
                },
                area: dataForm.area,
                category_id: dataForm.category,
                expired_date: moment(dataForm.expired_date).format("YYYY-MM-DDTHH:mm:ss") + 'Z',
                overview: dataForm.overview,
                title: dataForm.title,
                total_price: dataForm.total_price,
                type_apartment: dataForm.type_apartment,
                photos: listphoto,
            }
            updateApartment.PUT(dataPost, detailHome.id);
            formMain.resetFields();
            dispatch(resetDetail());
            setFileList([]);
            setDescriptionEditor('');
            setIsModalVisible(false);
        }
    };

    const handleCancel = () => {
        formMain.resetFields();
        dispatch(resetDetail());
        setFileList([]);
        setDescriptionEditor('');
        setIsModalVisible(false);
    };


    const showModalFilter = () => {

        setIsModalVisibleFilter(true);
    };

    const handleOkFilter = () => {

        const dataForm = formFilter.getFieldValue();

        let dataPrice = price.filter(el => el.id === dataForm.price)
        let dataArea = acreage.filter(el => el.id === dataForm.area)

        dispatch(getListApartment({
            ...params,
            status: dataForm.status,//
            type_apartment: dataForm.type_apartment,//
            search: dataForm.search,//
            province_id: dataForm.province,//
            price_to: dataPrice[0]?.to === -1 ? undefined : dataPrice[0]?.to,
            price_from: dataPrice[0]?.from === -1 ? undefined : dataPrice[0]?.from,
            district_id: dataForm.category,//
            category_id: dataForm.category,//
            area_to: dataArea[0]?.to === -1 ? undefined : dataArea[0]?.to,
            area_from: dataArea[0]?.from === -1 ? undefined : dataArea[0]?.from,
        }));
        setParams({
            ...params,
            status: dataForm.status,//
            type_apartment: dataForm.type_apartment,//
            search: dataForm.search,//
            province_id: dataForm.province,//
            price_to: dataPrice[0]?.to === -1 ? undefined : dataPrice[0]?.to,
            price_from: dataPrice[0]?.from === -1 ? undefined : dataPrice[0]?.from,
            district_id: dataForm.category,//
            category_id: dataForm.category,//
            area_to: dataArea[0]?.to === -1 ? undefined : dataArea[0]?.to,
            area_from: dataArea[0]?.from === -1 ? undefined : dataArea[0]?.from,
        })
        setIsModalVisibleFilter(false);
    };

    const handleCancelFilter = () => {
        setIsModalVisibleFilter(false);
    };

    //Hình ảnh
    const [fileList, setFileList] = useState([]);

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ paddingTop: '10px' }}>Upload</div>
        </div>
    );

    const beforeUpload = (file) => {
        setFileList([
            ...fileList,
            {
                file: file, // thấy ant nó set cái file vào trường file k?
                uid: file.uid,
                name: file.name,
            }])
    }
    const handleChange = info => {
        const newList = [...info.fileList]
        newList.forEach(item => {
            item.status = "done"
            let mapItem = fileList.find(file => file.uid === item.uid)
            if (mapItem) {
                item.url = mapItem.url
                item.file = mapItem.file
            }
        })
        if (info.file.originFileObj) {
            getBase64(info.file.originFileObj, imageUrl => {
                newList.forEach(item => {
                    if (item.uid === info.file.uid) {
                        item.url = imageUrl
                    }
                })
                setFileList(newList)
            });
        }
        setFileList(newList)
    };
    //
    //HTML EDIT
    const [descriptionEditor, setDescriptionEditor] = useState('');
    const handleChangeOverview = (e) => {
        setDescriptionEditor(e)
    }

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    }


    //
    const deleteFilter = () => {
        formFilter.resetFields();
        dispatch(getListApartment({
            sort_direction: "ASC",
            sort_by: '',//
            status: '',//
            type_apartment: '',//
            size: 10,//
            page: 1,//
            search: '',//
            province_id: undefined,//
            price_to: undefined,
            price_from: undefined,
            district_id: undefined,//
            category_id: undefined,//
            area_to: undefined,
            area_from: undefined,
        }))
        setParams({
            sort_direction: "ASC",
            sort_by: '',//
            status: '',//
            type_apartment: '',//
            size: 10,//
            page: 1,//
            search: '',//
            province_id: undefined,//
            price_to: undefined,
            price_from: undefined,
            district_id: undefined,//
            category_id: undefined,//
            area_to: undefined,
            area_from: undefined,
        })
        dispatch(loadDistrict())
    }

    const onSort = (value) => {
        dispatch(getListApartment({
            ...params,
            sort_by: value === "ALL" ? undefined : value,
        }))
        setParams({
            ...params,
            sort_by: value === "ALL" ? undefined : value,
        })
    }

    const listApartment = useSelector(state => state.admin.apartment.listApartment);
    const totalItem = useSelector(state => state.admin.apartment.totalItem);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListApartment(params));
        dispatch(loadProvince());
        dispatch(loadListCategory());
    }, []);

    const [idTemp, setIdTemp] = useState(undefined);

    const acceptStatus = async () => {
        await validateApartment.POST({ decision: true }, idTemp)
        dispatch(getListApartment(params))
        setIsModalVisibleStatus(false);
    }
    const cancelStatus = async () => {
        await validateApartment.POST({ decision: false }, idTemp)
        dispatch(getListApartment(params))
        setIsModalVisibleStatus(false);
    }
    const cancelModalStatus = () => {

        setIsModalVisibleStatus(false);
    };

    const [isVisibleNoti, setIsVisibleNoti] = useState(false);
    const [isVisibleNotiReset, setIsVisibleNotiReset] = useState(false);

    const handleOkNoti = async () => {
        await closeApartment.POST(idTemp);
        dispatch(getListApartment(params));
        setIsVisibleNoti(false);
    }
    const handleOkNotiReset = async () => {
        await validateApartment.POST({ decision: true }, idTemp)
        dispatch(getListApartment(params))
        setIsVisibleNotiReset(false);
    }
    const showModalNoti = (record) => {
        setIdTemp(record.id);
        setIsVisibleNoti(true);
    }
    const handleCancelNotiReset = () => {
        setIsVisibleNotiReset(false);
    }

    const handleCancelNoti = () => {
        setIsVisibleNoti(false);
    }

    const onDirection = (value) => {
        dispatch(getListApartment({
            ...params,
            sort_direction: value,
        }))
        setParams({
            ...params,
            sort_direction: value,
        })
    }


    return (

        <div className="admin-manage-apartment">
            <Modal className="modal-apartment" width={800} title={typeButton === "ADD" ? "Thêm căn hộ" : "Chỉnh sửa căn hộ"} visible={isModalVisible} onOk={typeButton === "ADD" ? addApartment : changeApartment} okText={typeButton === "ADD" ? "Thêm" : "Chỉnh sửa"} cancelText="Hủy" onCancel={handleCancel}>
                <Form form={formMain}>
                    <div style={{ height: "300px", overflowY: "scroll" }}>
                        <Row>
                            <Col span={24}>
                                <h1 style={{ textAlign: "center", fontWeight: "800" }}>Thông tin</h1>
                            </Col>
                            <Col span={24}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Hình ảnh</h1>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {uploadButton}
                                </Upload>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tiêu đề</h1>
                                <Form.Item name="title">
                                    <Input className="input" type="text" placeholder="Tiêu đề"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>

                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Thành phố</h1>
                                <Form.Item name="province">
                                    <Select className="form-control select" onChange={setValueProvince} >
                                        {listProvince.map(item =>
                                            <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Thể loại</h1>
                                <Form.Item name="category">
                                    <Select className="form-control select" onChange={setValueCategory}>
                                        {listCategory.map(item =>
                                            <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Quận/huyện</h1>
                                <Form.Item name="district" >
                                    <Select className="form-control select" onChange={setValueDistrict} >
                                        {listDistrict.map(item =>
                                            <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Ngày hết hạn</h1>
                                <Form.Item name="expired_date" >
                                    <DatePicker className="input" disabledDate={disabledDate} />
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Địa chỉ cụ thể</h1>
                                <Form.Item name="address">
                                    <Input className="input" type="text" placeholder="Địa chỉ cụ thể"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tổng tiền</h1>
                                <Form.Item name="total_price">
                                    <Input className="input" type="text" placeholder="Nhập tổng tiền"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Mô tả</h1>
                                <Form.Item name="description">
                                    <HTMLEditor
                                        className="html-edit"
                                        wrapperClassName="wrapper-editor"
                                        editorClassName="editor"
                                        toolbarClassName="toolbar"
                                        onChange={handleChangeOverview}
                                        value={descriptionEditor === undefined || descriptionEditor === null || descriptionEditor === "<p></p>\n" ? "" : descriptionEditor}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Sân nhà</h1>
                                <Form.Item name="front_building">
                                    <Input className="input" type="text" placeholder="Sân nhà"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Phòng ngủ</h1>
                                <Form.Item name="bedroom_quantity">
                                    <Input className="input" type="text" placeholder="Số phòng ngủ"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Lối vào nhà</h1>
                                <Form.Item name="entrance_building">
                                    <Input className="input" type="text" placeholder="Lối vào căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11} offset={2}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Phòng tắm</h1>
                                <Form.Item name="bathroom_quantity">
                                    <Input className="input" type="text" placeholder="Số phòng tắm"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Nội thất</h1>
                                <Form.Item name="furniture">
                                    <Input className="input" type="text" placeholder="Nội thất trong căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Nhà vệ sinh</h1>
                                <Form.Item name="toilet_quantity">
                                    <Input className="input" type="text" placeholder="Số nhà vệ sinh"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Hướng nhà</h1>
                                <Form.Item name="house_direction">
                                    <Input className="input" type="text" placeholder="Hướng căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Kích thước</h1>
                                <Form.Item name="area">
                                    <Input className="input" type="text" placeholder="Kích thước căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Hướng ban công</h1>
                                <Form.Item name="balcony_direction">
                                    <Input className="input" type="text" placeholder="Hướng ban công căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tình trạng</h1>
                                <Form.Item name="type_apartment">
                                    <Select className="form-control select" onChange={setValueTypeApartment}>
                                        <Option value="BUY">Bán</Option>
                                        <Option value="RENT">Cho thuê</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Số tầng</h1>
                                <Form.Item name="floor_quantity">
                                    <Input className="input" type="text" placeholder="Số tầng căn hộ"></Input>
                                </Form.Item>
                            </Col>
                            <Col offset={2} span={11}>

                                <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>View</h1>
                                <Form.Item name="overview">
                                    <Input className="input" type="text" placeholder="View căn hộ"></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                </Form>
            </Modal>
            <Modal width={650} className="modal-apartment" title="Lọc" visible={isModalVisibleFilter} onOk={handleOkFilter} okText="Lọc" onCancel={handleCancelFilter} cancelText="Hủy">
                <Form form={formFilter}>
                    <Row>
                        <Col span={24}>
                            <Form.Item name="search">
                                <Input style={{ height: "50px", borderRadius: "8px" }} className="input" type="text" placeholder="Tìm kiếm..."></Input>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Thành phố</h1>
                            <Form.Item name="province">
                                <Select className="form-control select" onChange={setValueProvinceFilter} >
                                    {listProvince.map(item =>
                                        <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                    )}
                                    {/* <Option value="ALL">ALL</Option>
                                        <Option value="ID">ID</Option>
                                        <Option value="NAME">NAME</Option> */}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col offset={2} span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Quận/huyện</h1>
                            <Form.Item name="district" >
                                <Select className="form-control select" onChange={setValueDistrictFilter} >
                                    {listDistrict.map(item =>
                                        <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Thể loại</h1>
                            <Form.Item name="category">
                                <Select className="form-control select" onChange={setValueCategoryFilter}>
                                    {listCategory.map(item =>
                                        <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col offset={2} span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tình trạng</h1>
                            <Form.Item name="type_apartment">
                                <Select className="form-control select" onChange={setValueTypeApartmentFilter}>
                                    <Option value="BUY">Bán</Option>
                                    <Option value="RENT">Cho thuê</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Trạng thái</h1>
                            <Form.Item name="status">
                                <Select className="form-control select" onChange={setValueStatusFilter}>
                                    <Option value="OPEN">OPEN</Option>
                                    <Option value="PENDING">PENDING</Option>
                                    <Option value="CLOSE">CLOSE</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col offset={2} span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Diện tích</h1>
                            <Form.Item name="area">
                                <Select className="form-control select" x>
                                    {acreage.map(item =>
                                        <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                    )}
                                    {/* <Option value="ALL">ALL</Option>
                                        <Option value="ID">ID</Option>
                                        <Option value="NAME">NAME</Option> */}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <h1 style={{ fontSize: '1rem', fontWeight: '800' }}>Tổng tiền</h1>
                            <Form.Item name="price" >
                                <Select className="form-control select" >
                                    {price.map(item =>
                                        <Option key={item?.id} value={item.id}>{item?.name}</Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Modal>
            <Modal className="modal-apartment"
                visible={isModalVisibleStatus}
                title="Lưu ý !"
                onOk={acceptStatus}
                onCancel={cancelModalStatus}
                footer={[
                    <Button style={{ marginRight: " 8px " }} className="ant-btn-return" onClick={cancelModalStatus}>
                        Quay lại
                    </Button>,
                    <Button style={{ marginRight: " 8px " }} className='ant-btn' onClick={cancelStatus}>
                        Từ chối
                    </Button>,
                    <Button
                        style={{ marginRight: " 8px " }}
                        className='ant-btn-primary'
                        onClick={acceptStatus}
                    >
                        Đồng ý
                    </Button>,
                ]}
            >
                <p>Bạn có muốn phê duyệt bài đăng này không ?</p>
            </Modal>
            <Modal className='modal-apartment' title="Thông báo" visible={isVisibleNoti} onOk={handleOkNoti} onCancel={handleCancelNoti} okText="Xác nhận">
                <p>Bạn có chắc chắn muốn xóa ? (Sau khi xóa bài viết sẽ có trạng thái CLOSE)</p>
            </Modal>
            <Modal className='modal-apartment' title="Thông báo" visible={isVisibleNotiReset} onOk={handleOkNotiReset} onCancel={handleCancelNotiReset} okText="Xác nhận">
                <p>Bạn có chắc chắn muốn mở lại bài viết ? (Sau khi mở lại bài viết sẽ có trạng thái OPEN)</p>
            </Modal>
            <Row>
                <Col span={24}>
                    <div className="title-wrapper">
                        <div className="title" style={{ textAlign: "center" }}>
                            Quản Lý Căn Hộ
                        </div>
                        <div className="sub-title" style={{ textAlign: "center" }}>
                            Nơi Quản Lý Tất Cả Căn Hộ
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="table-wrapper">
                <div className="table-tool">
                    <Row>
                        <Col span={2}>
                            <Button style={{ width: '100% ', textAlign: "center" }} onClick={() => showModalFilter()} className="admin-btn-add-apartment">Lọc <AlignLeftOutlined /></Button>
                        </Col>
                        <Col offset={1} span={3}>
                            <Button style={{ width: '100% ', textAlign: "center" }} onClick={() => deleteFilter()} className="admin-btn-add-apartment">Xóa lọc <AlignLeftOutlined /></Button>
                        </Col>
                        <Col offset={1} span={3}>
                            <Button className="admin-btn-add-apartment" onClick={() => showModalAdd()}>Thêm căn hộ <PlusOutlined /></Button>
                        </Col>
                        <Col offset={7} span={2}>
                            <p style={{ margin: "5px 0px 0px 20px" }}>Sắp xếp</p>
                        </Col>
                        <Col span={3} style={{ paddingRight: "10px" }}>
                            <Select className="form-control select" onChange={(value) => onSort(value)} defaultValue="ALL"  >
                                <Option value="ALL">ALL</Option>
                                <Option value="ID">ID</Option>
                                <Option value="AREA">Diện tích</Option>
                                <Option value="TOTAL_PRICE">Tổng tiền</Option>
                            </Select>
                        </Col>
                        <Col span={2}>
                            <Select className="form-control select" onChange={(value) => onDirection(value)} defaultValue="ASC"  >
                                <Option value="ASC">Tăng dần</Option>
                                <Option value="DESC">Giảm dần</Option>
                            </Select>
                        </Col>
                    </Row>

                </div>
                <div className="separator"></div>
                <Table
                    className="table"
                    columns={columns}
                    dataSource={listApartment}
                    pagination={{
                        onChange: page => {
                            dispatch(getListApartment({
                                ...params,
                                page: page,
                            }))
                            setParams({
                                ...params,
                                page: page,
                            })

                        },
                        pageSize: 10,
                        total: totalItem,
                    }} />
            </div>

        </div>
    );
}

export default ManageApartment;