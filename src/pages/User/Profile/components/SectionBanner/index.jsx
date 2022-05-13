import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Form, Modal, Input, message, Upload, Button } from "antd";
import { changePasswordUser } from "../../../../../api/userApi";
import { LoadingOutlined } from "@ant-design/icons";
import { API_URL } from "../../../../../constants/Config";
import axios from "axios";
import { getInfoUser } from "../../../../../actions/user";

import Img from "../../../../../assets/images/noavatar.png";
import ButtonCustom from "../../../../../components/Button";

function SectionBanner() {
  const user = useSelector((state) => state.user.user);
  // Ở đây cần có 1 api để load avatar có sẵn, ok cụ thể api detail user ấy m trả về photos cho user đúng k
  const getPhotosImg = (name) => `${API_URL}/public/image/avatar/${name}`; // api này tí t sẽ đưa cho m
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    user?.avatar?.name
      ? getPhotosImg(user?.avatar?.name)
      : "https://lh3.googleusercontent.com/proxy/stQT4Uk85iJrYfMcA1eZjpy-Mli-xMmuWDRcuO53eE1sOLRtuq0Taf_B1w5xxzgMD6sE_tDKO0bsrgCvAi8mhFR_zSHbDGM"
  );
  const token = localStorage.getItem("access_token");

  const [form] = Form.useForm();

  const changePassword = () => {
    const dataForm = form.getFieldValue();
    if (dataForm.newPassword === dataForm.reNewPassword) {
      changePasswordUser.PUT({
        new_password: dataForm.newPassword,
        old_password: dataForm.oldPassword,
      });
      setIsModalVisible(false);
      form.resetFields();
    } else {
      message.error("Mật khẩu nhập lại không khớp !");
    }
  };
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
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const dispatch = useDispatch();

  const handleChange = (info) => {
    setLoading(true);
    const bodyFormData = new FormData();
    const result = [];
    bodyFormData.append("file", info.file.originFileObj);
    axios
      .request({
        url: API_URL + "/user/token/update-avatar",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: bodyFormData,
      })
      .then((res) => {
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
      <Modal
        title="Đổi mật khẩu"
        className="modal-password"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        width={450}
      >
        <Form form={form} onFinish={changePassword}>
          <div className="group-item" style={{ marginTop: "20px" }}>
            <p>Mật khẩu cũ</p>
            <Form.Item
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu cũ !",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
          </div>
          <div className="group-item">
            <p>Mật khẩu mới</p>
            <Form.Item
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu mới !",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
          </div>
          <div className="group-item">
            <p>Nhập lại mật khẩu mới</p>
            <Form.Item
              name="reNewPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu mới",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
          </div>
          <div className="footer-modal-filter">
            <Button onClick={handleCancel} className="btn-filter">
              Quay lại
            </Button>
            <Form.Item style={{ margin: "0" }}>
              <Button className="btn-search" htmlType="submit">
                Đổi mật khẩu
              </Button>
            </Form.Item>
          </div>
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
              {loading ? (
                <LoadingOutlined style={{ position: "absolute" }} />
              ) : null}
              <img
                src={
                  user?.avatar?.name ? getPhotosImg(user?.avatar?.name) : Img
                }
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </Upload>
            <div className="body">
              <h3 className="text">{user?.full_name}</h3>
              <span className="email">{user?.email}</span>
            </div>
            <ButtonCustom
              onClick={() => showModal()}
              value="Đổi mật khẩu"
              className="btn"
              icon="fas fa-plus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBanner;
