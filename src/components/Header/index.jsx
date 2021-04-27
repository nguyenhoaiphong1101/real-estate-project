import React, { useState } from 'react';
import './styles.scss';

function Header(props) {

    const [animation, setAnimation] = useState('')
    return (
        //navigation
        <div className={`nav-wrapper ${animation}`}
            onMouseEnter={() => setAnimation('animation-header-appear')}
            onMouseLeave={() => setAnimation('animation-header-disappear')}
        >
            <div className="top-navigation">
                <div className="nav-icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-twitter"></i>
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
                        <li><a href="#">Home Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Agents</a></li>
                        <li><a href="#">Agency</a></li>
                    </ul>
                </nav>
                <a className="btn-smList" href="#"><button>Submit Listing</button></a>
            </div>
        </div>
    );
}

export default Header;