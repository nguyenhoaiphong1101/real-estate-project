import { Row, Col, Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDistrict } from "../../../../../../../actions/search";
import { getInfoUser } from "../../../../../../../actions/user";
import { updateUser } from "../../../../../../../api/userApi";
import ButtonSubmit from "../../../../../../../components/Button";
import SelectCustom from "../../../../../../../components/Select";
import "./styles.scss";

function FormEdit() {
  const [form] = Form.useForm();

  const listCountry = useSelector((state) => state.search.country);
  const listProvince = useSelector((state) => state.search.province);
  const listDistrict = useSelector((state) => state.search.district);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const getDistrict = (id) => {
    dispatch(loadDistrict(id));
  };

  const changeValueProvince = (e) => {
    getDistrict(e);
    form.resetFields(["district"]);
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        country: "VN",
        district: user?.addressDto?.district_id,
        province: user?.addressDto?.province_id,
        address: user?.addressDto?.address,
        username: user?.username,
        ...user,
      });
      getDistrict(user?.addressDto?.province_id);
    }
  }, [user]);
  const onFinish = async (values) => {
    await updateUser.PUT({
      address: {
        address: values.address,
        country_code: values.country,
        district_id: values.district,
        province_id: values.province,
      },
      description: values.description,
      email: values.email,
      full_name: values.full_name,
      phone: values.phone,
    });
    dispatch(getInfoUser());
  };

  return (
    <div className="form-edit">
      <Form form={form} className="form-edit" onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <label className="pl-auto mt-10">T??n ?????y ?????</label>
            <Form.Item className="form-item" name="full_name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <label className="pl-auto">Username</label>
            <Form.Item className="form-item" name="username">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-10">
          <Col span={12}>
            <label className="pl-auto">Email</label>
            <Form.Item className="form-item" name="email">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <label className="pl-auto">S??? ??i???n tho???i</label>
            <Form.Item className="form-item" name="phone">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-10">
          <Col span={12}>
            <label className="pl-auto">?????a ch???</label>
            <Form.Item className="form-item" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <label className="pl-auto">Qu???c gia</label>
            <Form.Item className="form-item" name="country">
              <Select
                style={{ height: "58px" }}
                disabled
                options={listCountry.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                  };
                })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-10">
          <Col span={12}>
            <label className="pl-auto">Th??nh ph???</label>
            <Form.Item className="form-item" name="province">
              <Select
                style={{ height: "58px" }}
                onChange={changeValueProvince}
                options={listProvince.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                  };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <label className="pl-auto">Qu???n/huy???n</label>
            <Form.Item className="form-item" name="district">
              <Select
                options={listDistrict.map((item) => {
                  return {
                    value: item.id,
                    label: item.name,
                  };
                })}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="mt-10">
          <label className="pl-auto">Th??ng tin th??m</label>
          <Form.Item className="form-item" name="description">
            <TextArea />
          </Form.Item>
        </div>
        <Form.Item className="form-item" style={{ marginTop: "20px" }}>
          <ButtonSubmit
            value="L??u thay ?????i"
            className="submit"
            htmlType={"submit"}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormEdit;
