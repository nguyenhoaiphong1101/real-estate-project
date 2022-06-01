import React from "react";
import "./styles.scss";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { Input } from "antd";
import { loginApi } from "../../../../../api/loginApi";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInfoUser } from "../../../../../actions/user";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

function FormLogin() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();

  const loginSuccess = (role) => {
    if (role === "ADMIN") {
      window.location.replace("/admin/can-ho");
    } else {
      history.push("/home");
      dispatch(getInfoUser());
    }
  };

  const onFinish = (values) => {
    loginApi.POST(values, loginSuccess);

    //const listCity = searchApi.GET()
  };

  // const [state, setstate] = useState(initialState)
  return (
    <Form form={form} className="form-login" onFinish={onFinish}>
      <div style={{ width: "100%", padding: "0 120px" }}>
        <div className="form-login-text">
          <h3>Đăng Nhập</h3>
        </div>
        <div className="form-login-group">
          <label>Tài khoản</label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type="text"
              className="form-login-group-control"
              placeholder="Tài khoản"
              name="username"
            />
          </Form.Item>
        </div>
        <div className="form-login-group">
          <label>Mật khẩu</label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type="password"
              className="form-login-group-control"
              placeholder="Mật khẩu"
              name="password"
            />
          </Form.Item>
        </div>
        {/* <div className="form-login-group">
                <a className="form-login-group-forgot-password" href="#">Quên mật khẩu?</a>
            </div> */}
        <button type="submit" className="form-login-btn-submit">
          Đăng nhập
        </button>
        <div className="auth-seperator">
          <span>OR</span>
        </div>
        <p className="text-end">
          Bạn chưa có tài khoản?
          <a href="/dang-ky">Tạo ngay</a>
        </p>
      </div>
    </Form>
  );
}

export default FormLogin;
