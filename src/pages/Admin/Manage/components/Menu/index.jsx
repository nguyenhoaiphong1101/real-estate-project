import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import "./styles.scss"
import { useHistory } from 'react-router';


const { SubMenu } = Menu;

function AdminMenu(props) {

    const history = useHistory();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={collapsed ? { width: 90 } : { width: 256 }} className="admin-menu">

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="white"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => history.push("/admin/bai-viet")}>
                    Quản lý bài viết
          </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => history.push("/admin/tai-khoan")}>
                    Quản lý tài khoản
          </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />} onClick={() => history.push("/admin/comment")}>
                    Quản lý comment
          </Menu.Item>
            </Menu>
            <Button type="primary" onClick={toggleCollapsed} style={{ width: "100%" }}>
                <span>Menu</span>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
        </div>
    );
}

export default AdminMenu;