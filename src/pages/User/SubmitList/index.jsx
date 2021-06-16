import React, { useEffect, useState } from 'react';
import "./styles.scss";
import SubHeader from "../../../components/SubHeader";
import { Upload, Modal, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Row, Col, Input, Form } from 'antd';
import Feature from './components/Feature';
import SelectCustom from '../../../components/Select';
import Button from '../../../components/Button';
import { loadDistrict, loadProvince } from '../../../actions/search';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../api/createPostApartment';
import { loadListCategory } from '../../../actions/category';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { loadDetailHome } from '../../../actions/detailhome';


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function SubmitList(props) {


    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ paddingTop: '10px' }}>Upload</div>
        </div>
    );

    const handleCancel = () => { setPreviewVisible(false) };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview,);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const listDistrict = useSelector(state => state.search.district);
    const listProvince = useSelector(state => state.search.province);
    const listCategory = useSelector(state => state.category.listCategory)
    const detailHome = useSelector(state => state.detailhome.detailHome)
    const [valueDistrict, setValueDistrict] = useState({ id: null, name: '' });
    const [valueProvince, setValueProvince] = useState({ id: null, name: '' });
    const [valueTypeApartment, setValueTypeApartment] = useState({ id: null, name: '' });
    const [valueCategory, setValueCategory] = useState({ id: null, name: '' });

    useEffect(() => {
        if (valueProvince.id)
            getDistrict(valueProvince.id);
    }, [valueProvince]);

    const getDistrict = (id) => {
        dispatch(loadDistrict(id));
    }

    const changeValueProvince = (value, id) => {
        setValueProvince({ id: id.key, name: value });
        form.setFieldsValue({
            district: {
                id: null,
                name: ''
            }
        })
    }
    const changeValueDistrict = (value, id) => {
        setValueDistrict({ id: id.key, name: value });
    }
    const changeValueTypeApartment = (value, id) => {
        setValueTypeApartment({ id: id.key, name: value });
    }
    const changeValueCategory = (value, id) => {
        setValueCategory({ id: id.key, name: value });
    }


    useEffect(() => {
        dispatch(loadProvince());
        dispatch(loadListCategory());
    }, [])

    const handleChange = ({ fileList }) => { setFileList(fileList); console.log(fileList.thumbUrl); };

    const [arr1, setArr1] = useState([
        {
            icon: "flaticon-paint",
            label: "Sân nhà",
            name: 'front_building'
        },
        {
            icon: "flaticon-garage",
            label: "Lối vào nhà",
            name: 'entrance_building'
        },
        {
            icon: "flaticon-chair",
            label: "Nội thất",
            name: 'furniture'
        },
        {
            icon: "flaticon-fan",
            label: "Hướng nhà",
            name: 'house_direction'
        },
        {
            icon: "flaticon-garage",
            label: "Hướng ban công",
            name: 'balcony_direction'
        },
        {
            icon: "flaticon-ruler",
            label: "Số tầng",
            name: 'floor_quantity'
        },
    ]);
    const [arr2, setArr2] = useState([
        {
            icon: "flaticon-pillow",
            label: "Phòng ngủ",
            name: 'bedroom_quantity'
        },
        {
            icon: "flaticon-bathtub",
            label: "Phòng tắm",
            name: 'bathroom_quantity'
        },
        {
            icon: "flaticon-bathtub",
            label: "Nhà vệ sinh",
            name: 'toilet_quantity'
        },
        {
            icon: "flaticon-ruler",
            label: "Kích thước",
            name: 'area'
        },
        {
            icon: "flaticon-new",
            label: "Tình trạng",
            name: 'type_apartment',
        },

        {
            icon: "flaticon-view",
            label: "View",
            name: 'overview'
        }
    ]);

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    }

    function submitData() {

        const dataForm = form.getFieldValue();


        // createPost.POST()

        const dataPost = {
            apartment_address: {
                address: dataForm.address,
                country_code: "VN",
                district_id: valueDistrict.id,
                province_id: valueProvince.id,
            },
            apartment_detail: {
                balcony_direction: dataForm.balcony_direction,
                bathroom_quantity: dataForm.bathroom_quantity,
                bedroom_quantity: dataForm.bedroom_quantity,
                // description: dataForm.description,
                entrance_building: dataForm.entrance_building,
                floor_quantity: dataForm.floor_quantity,
                front_building: dataForm.front_building,
                furniture: dataForm.furniture,
                house_direction: dataForm.house_direction,
                toilet_quantity: dataForm.toilet_quantity
            },
            area: dataForm.area,
            category_id: valueCategory.id,
            expired_date: moment(dataForm.expired_date).format("YYYY-MM-DDTHH:mm:ss") + 'Z',
            overview: dataForm.overview,
            title: dataForm.title,
            total_price: dataForm.total_price,
            type_apartment: valueTypeApartment.id,
        }

        if (detailHome !== {}) {
            updatePost.PUT(dataPost, detailHome.id);
        }
        else {
            createPost.POST(dataPost);
        }
    }

    const history = useHistory();

    useEffect(() => {
        dispatch(loadDetailHome(history?.location?.state?.id))
    }, []);



    useEffect(() => {
        form.setFieldsValue({
            address: detailHome?.addressDetail?.address,
            balcony_direction: detailHome?.apartment_detail?.balcony_direction,
            bathroom_quantity: detailHome?.apartment_detail?.bathroom_quantity,
            bedroom_quantity: detailHome?.apartment_detail?.bedroom_quantity,
            // description: detailHome?.apartment_detail?.description,
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
            district: {
                id: detailHome?.addressDetail?.district_id,
                name: detailHome?.addressDetail?.district_name,
            },
            province: {
                id: detailHome?.addressDetail?.province_id,
                name: detailHome?.addressDetail?.province_name,
            },
            category: {
                id: detailHome?.category_id,
                name: detailHome?.category_name,
            },
            type_apartment: {
                id: detailHome?.type_apartment === 'Bán' ? 'BUY' : 'RENT',
                name: detailHome?.type_apartment,
            },
        })
        setValueCategory({
            id: detailHome?.category_id,
            name: detailHome?.category_name,
        });
        setValueDistrict({
            id: detailHome?.addressDetail?.district_id,
            name: detailHome?.addressDetail?.district_name,
        });
        setValueProvince({
            id: detailHome?.addressDetail?.province_id,
            name: detailHome?.addressDetail?.province_name,
        });
        setValueTypeApartment({
            id: detailHome?.type_apartment === 'Bán' ? 'BUY' : 'RENT',
            name: detailHome?.type_apartment,
        });
    }, [detailHome]);

    return (
        <div className="sublist">
            <SubHeader title={history.location.pathname === '/dang-bai'?"Đăng bài":"Chỉnh Sửa Bài Đăng"} />
            <Form form={form} className="container form-submit-listing">
                <Row className="row">
                    <Col span={12}>
                        <div className="wrapper-space">
                            <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Tiêu đề</h1>
                            <Form.Item name="title" className="form-control">
                                <Input className="input" type="text" placeholder="Tiêu đề"></Input>
                            </Form.Item>
                            <Form.Item name="category" className="form-control">
                                <SelectCustom title="Thể loại" onHandleChange={changeValueCategory} options={listCategory} />
                            </Form.Item>
                            <Form.Item className="pl-auto label" label="Ngày Hết Hạn" name="expired_date">
                                <DatePicker className="input" disabledDate={disabledDate} />
                            </Form.Item>
                            <Form.Item className="pl-auto label" name="total_price" label="Tổng Giá">
                                <Input className="input" ></Input>
                            </Form.Item>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="wrapper-space">
                            <h1 style={{ fontSize: '2rem', fontWeight: '800' }} className="title">Địa chỉ</h1>
                            <Row>
                                <Col span={12} className="pr-20">
                                    <Form.Item name="province">
                                        <SelectCustom title="Thành phố" onHandleChange={changeValueProvince} options={listProvince} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="district">
                                        <SelectCustom title="Quận/huyện" value={valueDistrict} onHandleChange={changeValueDistrict} options={listDistrict} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item name="address">
                                <Input className="input" placeholder="Địa chỉ cụ thể"></Input>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                    <Col span={24}>
                        <div className="wrapper-space">
                            <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Hình ảnh</h1>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {uploadButton}
                            </Upload>
                        </div>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Col>
                </Row>
                <Row className="row">
                    <Col span={24}>
                        <div className="wrapper-space">
                            <div className="section-feature">
                                <h4 className="title">Đặc điểm</h4>
                                <div className="container-fluid wrapper">
                                    <div className="list-feature">
                                        <Row>
                                            <Col span={12}>{arr1.map((item, index) => {
                                                return <Feature key={index} name={item.name} icon={item.icon} label={item.label} />
                                            })}</Col>
                                            <Col span={12}>{arr2.map((item, index) => {
                                                if (item.name == 'type_apartment') {
                                                    return <Feature key={index} onchange={changeValueTypeApartment} name={item.name} icon={item.icon} label={item.label} />
                                                } else {
                                                    return <Feature key={index} name={item.name} icon={item.icon} label={item.label} />
                                                }
                                            })}</Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Button className="btn-custom" value={history.location.pathname === '/dang-bai'? "Đăng bài" : "Chỉnh sửa"} onClick={() => submitData()}></Button>
            </Form>
        </div >
    );
}

export default SubmitList;