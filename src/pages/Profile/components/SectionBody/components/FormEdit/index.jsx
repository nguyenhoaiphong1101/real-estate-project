import { Row, Col, Form, Input, Popover } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import ButtonSubmit from '../../../../../../components/Button';
import ThumbnailExtra from '../../../../../../components/Thumbnail/ThumbnailExtra';
import './styles.scss';



function FormEdit() {
    return (
        <div className="form-edit">
            <Form className="form">
                <Row>
                    <Col span={12}>
                        <label>Tên đầy đủ</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label>Username</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label>Email</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label>Số điện thoại</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <label>Địa chỉ</label>
                        <Form.Item className="form-item" name="email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <label>Thông tin thêm</label>
                        <Form.Item className="form-item" name="email" >
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