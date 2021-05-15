import React from 'react';
import './styles.scss';
import { createFromIconfontCN, GoogleOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function index() {
    return (
        <form className="form-login">
            <div className="form-login-text">
                <h3>Đăng Nhập</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est voluptatibus aliquid repellat impedit. Quidem quae blanditiis ex consequuntur officiis corporis odio repellat aspernatur temporibus, aut rerum. Nulla, porro cum.</p>
            </div>
            <div className="form-login-group">
                <label>Tài khoản</label>
                <input type="text" className="form-login-group-control" placeholder="Tài khoản" name="username" />
            </div>
            <div className="form-login-group">
                <label>Mật khẩu</label>
                <input type="password" className="form-login-group-control" placeholder="Mật khẩu" name="password" />
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
            <button type="button" className="form-login-btn-facebook "><IconFont type="icon-facebook" className="mr-10" />Tiếp tục với Facebook</button>
            <button type="button" className="form-login-btn-google"><GoogleOutlined className="mr-10" />Tiếp tục với Google</button>
            <p className="text-end">
                Bạn chưa có tài khoản?
                <a href="#">Tạo ngay</a>

            </p>
        </form>
    );
}

export default index;