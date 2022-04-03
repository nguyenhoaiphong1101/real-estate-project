import {
    ContainerOutlined, DesktopOutlined, PieChartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "./styles.scss";


const { SubMenu } = Menu;

function AdminMenu(props) {

    const history = useHistory();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={collapsed ? { width: 90 } : {}} className="admin-menu">
            <Menu
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
            >
                {/* <Menu.Item className="mt-0" key="1" icon={<PieChartOutlined />} >
                    <Link to="/admin/tong-quan">
                        Tổng Quan
                    </Link>
                </Menu.Item> */}
                <Menu.Item className="mt-0" key="1" icon={<PieChartOutlined />} >
                    <Link to="/admin/can-ho">
                        Quản lý căn hộ
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/admin/nguoi-dung">
                        Quản lý người dùng
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    <Link to="/admin/the-loai">
                        Quản lý thể loại
                    </Link>
                </Menu.Item>
                <div className="separator-custom"></div>
                {/* <SubMenu key="sub1" icon={<ContainerOutlined />} title="Cài Đặt">
                    <Menu.Item key="5">
                        <Link to="/admin">
                            Quản Lý Thể Loại
                        </Link>
                    </Menu.Item>
                </SubMenu> */}
            </Menu>
            {/* 
              <Button type="primary" onClick={toggleCollapsed} className="btn-custom" >
                <span>Menu</span>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            */}

        </div>
    );
}

export default AdminMenu;