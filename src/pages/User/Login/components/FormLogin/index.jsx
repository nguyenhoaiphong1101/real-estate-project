import React, { } from 'react';
import './styles.scss';
import { createFromIconfontCN, GoogleOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { Input } from 'antd';
import { loginApi } from "../../../../../api/loginApi"
import { useHistory } from 'react-router-dom';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function FormLogin() {
    const [form] = Form.useForm();
    const history = useHistory();

    const loginSuccess = (role) => {
        if (role === "ADMIN") {
            history.push("/admin")
        } else {
            history.push("/")
        }
    }

    const onFinish = (values) => {
        loginApi.POST(values, loginSuccess);
        //const listCity = searchApi.GET()
    };

    // const [state, setstate] = useState(initialState)
    return (
        <Form form={form} className="form-login" onFinish={onFinish}>
            <div className="form-login-text">
                <h3>Đăng Nhập</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est voluptatibus aliquid repellat impedit. Quidem quae blanditiis ex consequuntur officiis corporis odio repellat aspernatur temporibus, aut rerum. Nulla, porro cum.</p>
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
                    <Input type="text" className="form-login-group-control" placeholder="Tài khoản" name="username" />
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
                    <Input type="password" className="form-login-group-control" placeholder="Mật khẩu" name="password" />
                </Form.Item>
            </div>
            <div className="form-login-group">
                <a className="form-login-group-forgot-password" href="#">Quên mật khẩu?</a>
            </div>
            <button type="submit" className="form-login-btn-submit">Đăng nhập</button>
            <div className="auth-seperator">
                <span>
                    OR
                </span>
            </div>
            <p className="text-end">
                Bạn chưa có tài khoản?
                <a href="#">Tạo ngay</a>
            </p>





        </Form>
    );
}

export default FormLogin;