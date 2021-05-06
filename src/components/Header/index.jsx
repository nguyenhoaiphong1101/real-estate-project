import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './styles.scss';

import useDocumentScroll from './../../hooks/useDocumentScroll'
import ROUTES, { RenderRoutes } from '../../router/routerConfig';
import ROUTESMENU from '../../router/menuConfig';

function Header(props) {
    const [path, setPath] = useState('');
    useEffect(() => {
        props.setContent(() => <RenderRoutes setPath={setPath} routes={[...ROUTES, ...ROUTESMENU]} />);
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
    useEffect(() => {
        if (path === '/dang-ky' || path === '/dang-nhap') {
            setShouldScrollHeader(true)
        }
    })

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
                {displayRouteLogin(ROUTESMENU, path)}
            </div>
            <div className="main-header">
                <nav className="nav">
                    <img className="nav-logo" src="https://achaumedia.vn/wp-content/uploads/2020/03/Free_Vector_Logo_for_Real_Estate-300x138.jpg" alt="logo" />
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