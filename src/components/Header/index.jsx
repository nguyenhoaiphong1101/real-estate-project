import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './styles.scss';

import useDocumentScroll from './../../hooks/useDocumentScroll'
import ROUTES, { RenderRoutes } from '../../router/routerConfig';

function Header(props) {
    const [path, setPath] = useState('');
    useEffect(() => {
        props.setContent(() => <RenderRoutes setPath={setPath} routes={ROUTES} />);
    }, [])

    const [shouldScrollHeader, setShouldScrollHeader] = useState(false);
    const [scroll, setScroll] = useState(0);

    const MINIMUM_SCROLL = 10;
    const TIMEOUT_DELAY = 0;

    useDocumentScroll(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        if (currentScrollTop > MINIMUM_SCROLL) {
            setShouldScrollHeader(true)
        } else {
            setShouldScrollHeader(false)
        }
    });

    const topStyle = shouldScrollHeader ? 'nav-wrapper__scroll' : 'nav-wrapper__top';

    const [animation, setAnimation] = useState('')
    return (
        <div className={`nav-wrapper ${shouldScrollHeader ? '' : `${animation}`}  ${topStyle}`}
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
                <ul className="nav-link">
                    <li><a href="#">Đăng nhập</a></li>
                    <span>or</span>
                    <li><a href="#">Đăng ký</a></li>
                </ul>
            </div>
            <div className="main-header">
                <nav className="nav">
                    <img className="nav-logo" src="https://achaumedia.vn/wp-content/uploads/2020/03/Free_Vector_Logo_for_Real_Estate-300x138.jpg" alt="logo" />
                    {/* <ul className="nav-link">
                        <li>
                            <a href="#">Home Pages</a>
                            <ul className="dropdown">
                                <li><a href="./room-details.html">Page 1</a></li>
                                <li><a href="./blog-details.html">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                                <li><a href="#">Page 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Blog</a>
                            <ul className="dropdown">
                                <li><a href="./room-details.html">Page 1</a></li>
                                <li><a href="./blog-details.html">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Agents</a></li>
                        <li><a href="#">Agency</a></li>
                    </ul> */}
                    {displayRouteMenu(ROUTES, path)}
                </nav>
                <div className="button-wrap">
                    <Button className="btn" value="Gửi danh sách" icon="fas fa-plus" />
                </div>
            </div>
        </div>
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