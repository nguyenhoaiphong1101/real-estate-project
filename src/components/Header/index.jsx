import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './styles.scss';

import useDocumentScroll from './../../hooks/useDocumentScroll'


function Header(props) {
    const [path, setPath] = useState(props.path);
    // const [topStyle, setTopStyle] = useState('');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.pathname === '/dang-ky' || location.pathname === '/dang-nhap') {
            props.setEnableFooter(false);
        } else {
            props.setEnableFooter(true);
        }
    }, [location.pathname])

    const removeLocal = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('role')
        history.push('/')
    }


    const token = localStorage.getItem('access_token');

    const checkLogin = () => {
        if (token == null) {
            return (
                <ul className="nav-link">
                    <React.Fragment>
                        <li className={path === "/dang-nhap" ? "active" : ""}>
                            <Link to='/dang-nhap' > Đăng nhập </Link>
                        </li>
                    </React.Fragment>
                    <React.Fragment>
                        <li className={path === "/dang-ky" ? "active" : ""}>
                            <Link to='/dang-ky' > Đăng ký </Link>
                        </li>
                    </React.Fragment>
                </ul>
            )
        } else {
            return (
                <ul className="nav-link">
                    <React.Fragment>
                        <li className={path === "/dang-nhap" ? "active" : ""}>
                            <Link to='/' onClick={() => {
                                removeLocal()
                                props.setLoading(true)
                            }}> Đăng xuất </Link>
                        </li>
                    </React.Fragment>
                </ul>
            )
        }
    }


    const [shouldScrollHeader, setShouldScrollHeader] = useState(false);
    const [shouldLogin, setShouldLogin] = useState('');

    const MINIMUM_SCROLL = 10;
    useDocumentScroll(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        if (currentScrollTop > MINIMUM_SCROLL) {
            setShouldScrollHeader(true)
        } else {
            setShouldScrollHeader(false)
        }
    });

    const topStyle = shouldScrollHeader ? 'nav-wrapper__scroll' : 'nav-wrapper__top';

    useEffect(() => {
        if (location.pathname === '/dang-ky' || location.pathname === '/dang-nhap') {
            setShouldLogin('nav-wrapper__full-top')
        } else {
            setShouldLogin('')
        }
    }, [location.pathname])
    const [animation, setAnimation] = useState('')

    return (
        <>
            {
                props.role === 'ADMIN'
                    ?
                    <div className="admin-header">
                        <div className="header">
                            <a href="#default" className="logo">Admin</a>
                            <div className="header-right">
                                <a className="active" href="" onClick={() => {
                                    removeLocal()
                                    props.setLoading(true)
                                }}>Logout</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`nav-wrapper ${shouldLogin !== '' ? shouldLogin : shouldScrollHeader ? `${topStyle}` : `${animation} ${topStyle}`}  ${topStyle}`}
                        //<div className={`nav-wrapper ${shouldScrollHeader ? '' : `${animation}`}  ${topStyle}`}
                        onMouseEnter={() => setAnimation('animation-header-appear')}
                        onMouseLeave={() => setAnimation('animation-header-disappear')}
                    >
                        <div className="top-navigation">
                            <div className="nav-icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-pinterest-p"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                            {checkLogin()}
                        </div>
                        <div className="main-header">
                            <nav className="nav">
                                <img className="nav-logo" src="https://achaumedia.vn/wp-content/uploads/2020/03/Free_Vector_Logo_for_Real_Estate-300x138.jpg" alt="logo" />
                                <ul className="nav-link">
                                    <React.Fragment>
                                        <li className={path === "/" ? "active" : ""}>
                                            <Link to='/' > Trang chủ </Link>
                                        </li>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <li className={path === "/danh-sach" ? "active" : ""}>
                                            <Link to='/danh-sach' > Danh sách </Link>
                                        </li>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <li className={path === "/trang-ca-nhan" ? "active" : ""}>
                                            <Link to='/trang-ca-nhan' > Trang Cá Nhân </Link>
                                        </li>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <li className={path === "/dang-bai" ? "active" : ""}>
                                            <Link to='/dang-bai' > Đăng bài viết</Link>
                                        </li>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <li className={path === "/dang-ky" ? "active" : ""}>
                                            <Link to='/dang-ky' > Đăng ký </Link>
                                        </li>
                                    </React.Fragment>
                                </ul>
                            </nav>
                            <div className="button-wrap">
                                <Button className="btn" value="Gửi danh sách" icon="fas fa-plus" />
                            </div>
                        </div>
                    </div>

            }
        </>
    );
}

export default Header;

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteMenu(routes, path) {

    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRoute(route) {
        var active = route.path === path ? 'active' : '';
        return (
            <li key={route.key} className={active}>
                <Link to={route.path} > {route.display} </Link>
            </li>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <ul className="nav-link">
            {routes.map(route => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.routes) {
                    return (
                        <React.Fragment key={route.key}>
                            {singleRoute(route)}
                            {displayRouteMenu(route.routes)}
                        </React.Fragment>
                    );
                }

                // no nested routes, so just render a single route
                return singleRoute(route);
            })}
        </ul>
    );
}
/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteLogin(routes, path) {

    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRouteLogin(route) {
        var active = route.path === path ? 'active' : '';
        return (
            <li key={route.key} className={active}>
                <Link to={route.path} > {route.display} </Link>
            </li>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <ul className="nav-link">
            {routes.map(route => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.routes) {
                    return (
                        <React.Fragment key={route.key}>
                            {singleRouteLogin(route)}
                            {displayRouteLogin(route.routes)}
                        </React.Fragment>
                    );
                }

                // no nested routes, so just render a single route
                return singleRouteLogin(route);
            })}
        </ul>
    );
}