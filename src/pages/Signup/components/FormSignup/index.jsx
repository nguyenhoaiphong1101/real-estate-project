import React from 'react';
import './styles.scss';
import { createFromIconfontCN, GoogleOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function index() {
    return (
        <form className="form-signup">
            <div className="form-signup-text">
                <h3>Đăng ký</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est voluptatibus aliquid repellat impedit. Quidem quae blanditiis ex consequuntur officiis corporis odio repellat aspernatur temporibus, aut rerum. Nulla, porro cum.</p>
            </div>
            <div className="form-signup-group">
                <label>Tài khoản</label>
                <input type="text" className="form-signup-group-control" placeholder="Tài khoản" name="username" />
            </div>
            <div className="form-signup-group">
                <label>Email</label>
                <input type="text" className="form-signup-group-control" placeholder="Email" name="email" />
            </div>
            <div className="form-signup-group">
                <label>Mật khẩu</label>
                <input type="password" className="form-signup-group-control" placeholder="Mật khẩu" name="password" />
            </div>
            <button type="submit" className="form-signup-btn-submit">Đăng ký</button>
            <div className="auth-seperator">
                <span>
                    OR
                </span>
            </div>
            <button type="button" className="form-signup-btn-facebook "><IconFont type="icon-facebook" className="mr-10" />Tiếp tục với Facebook</button>
            <button type="button" className="form-signup-btn-google"><GoogleOutlined className="mr-10" />Tiếp tục với Google</button>
            <p className="text-end">
                Bạn đã có tài khoản?
                <a href="#"> Đăng nhập</a>

            </p>
        </form>
    );
}

export default index;