import React from "react";
import "./styles.scss";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import { Form, Input, message } from "antd";
import { signupApi } from "../../../../../api/signupApi";
import { useHistory } from "react-router-dom";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

function Signup() {
  const history = useHistory();
  const signup = () => {
    const dataForm = form.getFieldValue();
    if (dataForm.password === dataForm.rePassword) {
      signupApi
        .POST({
          username: dataForm.username,
          password: dataForm.password,
        })
        .then((res) => {
          history.push("/dang-nhap");
        });
    } else {
      message.error("Mật khẩu nhập lại không khớp !");
    }
  };
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={signup} className="form-signup">
      <div style={{ width: "100%", padding: "0 120px" }}>
        <div className="form-signup-text">
          <h3>Đăng ký</h3>

          <p>
            Đăng tý tài khoản để sử dụng được nhiều chức năng trên website hơn !
          </p>
        </div>
        <div className="form-signup-group">
          <label>Tài khoản</label>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản !" }]}
          >
            <Input
              type="text"
              className="form-signup-group-control"
              placeholder="Tài khoản"
            />
          </Form.Item>
        </div>
        <div className="form-signup-group">
          <label>Mật khẩu</label>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu !" }]}
          >
            <Input
              type="password"
              className="form-signup-group-control"
              placeholder="Mật khẩu"
            />
          </Form.Item>
        </div>
        <div className="form-signup-group">
          <label>Nhập lại mật khẩu</label>
          <Form.Item
            name="rePassword"
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu !" },
            ]}
          >
            <Input
              type="password"
              className="form-signup-group-control"
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Item>
        </div>
        <button type="submit" className="form-signup-btn-submit">
          Đăng ký
        </button>
        <div className="auth-seperator">
          <span>OR</span>
        </div>
        <p className="text-end">
          Bạn đã có tài khoản?
          <a href="/dang-nhap"> Đăng nhập</a>
        </p>
      </div>
    </Form>
  );
}

export default Signup;
