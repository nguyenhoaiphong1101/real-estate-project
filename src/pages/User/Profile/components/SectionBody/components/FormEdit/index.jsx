import { Row, Col, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDistrict } from '../../../../../../../actions/search';
import { updateUser } from '../../../../../../../api/userApi';
import ButtonSubmit from '../../../../../../../components/Button';
import SelectCustom from '../../../../../../../components/Select';
import './styles.scss';



function FormEdit() {

    const [form] = Form.useForm();

    const listCountry = useSelector(state => state.search.country);
    const listProvince = useSelector(state => state.search.province);
    const listDistrict = useSelector(state => state.search.district);

    // const [valueForm, setValueForm] = useState({ full_name: '', email: '' });
    const [valueCountry, setValueCountry] = useState({});
    const [valueProvince, setValueProvince] = useState({ id: null, name: '' });
    const [valueDistrict, setValueDistrict] = useState({ id: null, name: '' });

    useEffect(() => {
        if (valueProvince.id)
            getDistrict(valueProvince.id);
    }, []);


    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch();

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
    const changeValueCountry = (value, id) => {
        setValueCountry({ id: id.key, name: value });
    }
    const changeValueDistrict = (value, id) => {
        setValueDistrict({ id: id.key, name: value });
    }


    // function handleChangeName(e) {
    //     setValueForm({ ...valueForm, full_name: e.target.value });
    // }

    useEffect(() => {
        form.setFieldsValue({
            full_name: user?.full_name,
            country: {
                id: user?.addressDto?.country_code,
                name: user?.addressDto?.country_name,
            },
            district: {
                id: user?.addressDto?.district_id,
                name: user?.addressDto?.district_name,
            },
            province: {
                id: user?.addressDto?.province_id,
                name: user?.addressDto?.province_name,
            },
            username: user?.username,
            email: user?.email,
            phone: user?.phone,
            address: user?.addressDto?.address,
            description: user?.description,
        })

        setValueCountry({
            id: user?.addressDto?.country_code,
            name: user?.addressDto?.country_name,
        })
        setValueProvince(
            {
                id: user?.addressDto?.province_id,
                name: user?.addressDto?.province_name,
            }
        );
        setValueDistrict({
            id: user?.addressDto?.district_id,
            name: user?.addressDto?.district_name,
        });
    }, [user]);
    const onFinish = (values) => {
        updateUser.PUT(
            {
                address: {
                    address: values.address,
                    country_code: valueCountry.id,
                    district_id: valueDistrict.id,
                    province_id: valueProvince.id,
                },
                description: values.description,
                email: values.email,
                full_name: values.full_name,
                phone: values.phone,
            }
        )
    };

    return (
        <div className="form-edit">
            <Form form={form} className="form-edit" onFinish={onFinish}>
                <Row>
                    <Col span={12}>
                        <label className="pl-auto">Tên đầy đủ</label>
                        <Form.Item className="form-item" name="full_name" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label className="pl-auto">Username</label>
                        <Form.Item className="form-item" name="username" >
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label className="pl-auto">Email</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label className="pl-auto">Số điện thoại</label>
                        <Form.Item className="form-item" name="phone" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label className="pl-auto">Địa chỉ</label>
                        <Form.Item className="form-item" name="address" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className="form-item pt-auto" name="district" >
                            <SelectCustom title="Quận/huyện" value={valueDistrict} onHandleChange={changeValueDistrict} options={listDistrict} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className="form-item" name="province" >
                            <SelectCustom title="Thành phố" onHandleChange={changeValueProvince} options={listProvince} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item className="form-item" name="country" >
                            <SelectCustom title="Quốc gia" disabled="true" onHandleChange={changeValueCountry} options={listCountry} />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <label className="pl-auto">Thông tin thêm</label>
                        <Form.Item className="form-item" name="description" >
                            <TextArea />
                        </Form.Item>
                    </Col>

                    <Form.Item className="form-item" >
                        <ButtonSubmit value="Lưu thay đổi" className="submit" />
                    </Form.Item>
                </Row>
            </Form>
        </div>
    );
}

export default FormEdit;