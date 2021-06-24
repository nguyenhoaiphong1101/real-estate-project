import React, { useState } from 'react';
import './styles.scss';
import Button from '../../../../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Modal, Input, message, Upload } from 'antd';
import { changePasswordUser } from '../../../../../api/userApi';
import { LoadingOutlined } from '@ant-design/icons';
import { API_URL } from '../../../../../constants/Config';
import axios from 'axios';
import { getInfoUser } from '../../../../../actions/user';



function SectionBanner() {
    const user = useSelector(state => state.user.user)
    // Ở đây cần có 1 api để load avatar có sẵn, ok cụ thể api detail user ấy m trả về photos cho user đúng k
    const getPhotosImg = (name) => `${API_URL}/public/image/avatar/${name}`; // api này tí t sẽ đưa cho m
    console.log(user?.avatar?.name);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(user?.avatar?.name ? getPhotosImg(user?.avatar?.name) : "https://lh3.googleusercontent.com/proxy/-leE7hK7HNnHvhUaXXj3XCxJpaqc2gVCm7U2m4-iA4UyQwocXrfHEVBqujHobCMqnG_3XDgMKmB3r9RozmQrZP7U1cjGcXc");
    const token = localStorage.getItem('access_token');

    const [form] = Form.useForm();

    const changePassword = () => {
        const dataForm = form.getFieldValue();
        if (dataForm.newPassword === dataForm.reNewPassword) {
            changePasswordUser.PUT({
                new_password: dataForm.newPassword,
                old_password: dataForm.oldPassword,
            })
            setIsModalVisible(false);
            form.resetFields();
        } else {
            message.error("Mật khẩu nhập lại không khớp !")
        }
    }
    const [isModalVisible, setIsModalVisible] = useState(false);



    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const dispatch = useDispatch()

    const handleChange = info => {
        setLoading(true);
        const bodyFormData = new FormData();
        const result = [];
        bodyFormData.append("file", info.file.originFileObj);
        axios.request({
            url: API_URL + '/user/token/update-avatar',
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: bodyFormData,
        })
            .then((res) => {
                console.log(res);
                res.data.data.forEach((file) => {
                    result.push({
                        originalName: file.originalName,
                        name: file.name,
                        extension: file.extension,
                    });
                });
                dispatch(getInfoUser());
                setLoading(false);
            });
    };
    return (
        <div className="profile-section-banner-wrapper">
            <Modal title="Đổi mật khẩu" visible={isModalVisible} onOk={changePassword} onCancel={handleCancel}>
                <Form form={form}>
                    <p>Mật khẩu cũ</p>
                    <Form.Item name="oldPassword" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu cũ !',
                        },
                    ]}>
                        <Input type="password" />
                    </Form.Item >
                    <p>Mật khẩu mới</p>
                    <Form.Item name="newPassword" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu mới !',
                        },
                    ]}>
                        <Input type="password" />
                    </Form.Item >
                    <p>Nhập lại mật khẩu mới</p>
                    <Form.Item name="reNewPassword" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại mật khẩu mới',
                        },
                    ]}>
                        <Input type="password" />
                    </Form.Item>
                </Form>
            </Modal>
            <div className="profile-section-banner">
                <div className="container">
                    <div className="sub-header">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {loading ? <LoadingOutlined style={{ position: "absolute" }} /> : null}
                            <img src={user?.avatar?.name ? getPhotosImg(user?.avatar?.name) : "https://lh3.googleusercontent.com/proxy/-leE7hK7HNnHvhUaXXj3XCxJpaqc2gVCm7U2m4-iA4UyQwocXrfHEVBqujHobCMqnG_3XDgMKmB3r9RozmQrZP7U1cjGcXc"} alt="avatar" style={{ width: '100%', height: "100%" }} />
                        </Upload>
                        <div className="body">
                            <h3 className="text">{user?.full_name}</h3>
                            <span className="email">{user?.email}</span>
                        </div>
                        <Button onClick={() => showModal()} value="Đổi mật khẩu" className="btn" icon="fas fa-plus" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;