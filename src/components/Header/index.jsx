import React, { useState } from 'react';
import Button from '../Button';
import './styles.scss';

import useDocumentScroll from './../../hooks/useDocumentScroll'

function Header(props) {

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
                    <li><a href="#">Login</a></li>
                    <span>or</span>
                    <li><a href="#">Signup</a></li>
                </ul>
            </div>
            <div className="main-header">
                <nav className="nav">
                    <img className="nav-logo" src="https://achaumedia.vn/wp-content/uploads/2020/03/Free_Vector_Logo_for_Real_Estate-300x138.jpg" alt="logo" />
                    <ul className="nav-link">
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
                    </ul>
                </nav>
                <div className="button-wrap">
                    <Button className="btn" value="Submit Listing" icon="fas fa-plus" />
                </div>
            </div>
        </div>
    );
}

export default Header;