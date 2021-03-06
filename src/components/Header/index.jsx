import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./styles.scss";
import jwt_decode from "jwt-decode";
import useDocumentScroll from "./../../hooks/useDocumentScroll";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../actions/user";
import { resetDetail } from "../../actions/detailhome";
import Images from "../../constants/Images";

function Header(props) {
  const user = useSelector((state) => state.user.user);
  // const [topStyle, setTopStyle] = useState('');
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (
      (["/home"].includes(location.pathname) && !location.search) ||
      location.pathname.search("chi-tiet") > 0
    )
      window.scrollTo(0, 0);
  }, [location]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      var expToken = jwt_decode(token).exp * 1000;
      var dateNow = new Date();

      if (expToken < dateNow.getTime()) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        dispatch(resetUser());
      }
    }
  }, []);

  const removeLocal = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    history.push("/home");
  };

  const dispatch = useDispatch();

  const checkLogin = () => {
    if (token === null) {
      return (
        <ul className="nav-link">
          <React.Fragment>
            <li>
              <Link to="/dang-nhap">Đăng nhập</Link>
            </li>
          </React.Fragment>
          <React.Fragment>
            <li>
              <Link to="/dang-ky">Đăng ký</Link>
            </li>
          </React.Fragment>
        </ul>
      );
    } else {
      return (
        <ul className="nav-link">
          <React.Fragment>
            <li>
              {localStorage.getItem("role") === "ADMIN" ? (
                <a
                  className="mr-10"
                  onClick={() => window.location.replace("/admin/can-ho")}
                >
                  {" "}
                  Tới trang quản trị{" "}
                </a>
              ) : (
                ""
              )}
              <Link className="mr-10" to="/trang-ca-nhan">
                {" "}
                {`Hi ${
                  user?.full_name
                    ? user?.full_name
                    : user?.username
                    ? user?.username
                    : jwt_decode(token).full_name
                }`}{" "}
              </Link>
              <Link
                to="/home"
                onClick={() => {
                  removeLocal();
                  dispatch(resetUser());
                }}
              >
                {" "}
                Đăng xuất{" "}
              </Link>
            </li>
          </React.Fragment>
        </ul>
      );
    }
  };
  const toPost = () => {
    dispatch(resetDetail());
    history.push("/dang-bai");
  };

  const checkButtonSubmit = () => {
    if (token !== null) {
      return (
        <div className="button-wrap">
          <Button
            className="btn"
            value="Đăng bài viết"
            onClick={() => toPost()}
            icon="fas fa-plus"
          />
        </div>
      );
    }
  };

  const [shouldScrollHeader, setShouldScrollHeader] = useState(false);
  const [shouldLogin, setShouldLogin] = useState("");

  const MINIMUM_SCROLL = 10;
  useDocumentScroll((callbackData) => {
    const { currentScrollTop } = callbackData;
    if (currentScrollTop > MINIMUM_SCROLL) {
      setShouldScrollHeader(true);
    } else {
      setShouldScrollHeader(false);
    }
  });

  const topStyle = shouldScrollHeader
    ? "nav-wrapper__scroll"
    : "nav-wrapper__top";

  useEffect(() => {
    if (
      location.pathname === "/dang-ky" ||
      location.pathname === "/dang-nhap"
    ) {
      setShouldLogin("nav-wrapper__full-top");
    } else {
      setShouldLogin("");
    }
  }, [location.pathname]);
  const [animation, setAnimation] = useState("");

  return (
    <>
      {props.role === "ADMIN" ? (
        ""
      ) : (
        // <div className="admin-header">
        //     <div className="header">
        //         <a href="#default" className="logo">Admin</a>
        //         <div className="header-right">
        //             <a className="active" href="" onClick={() => {
        //                 removeLocal()
        //                 props.setLoading(true)
        //             }}>Logout</a>
        //         </div>
        //     </div>
        // </div>
        <div
          className={`nav-wrapper ${
            shouldLogin !== ""
              ? shouldLogin
              : shouldScrollHeader
              ? `${topStyle}`
              : `${animation} ${topStyle}`
          }  `}
          //<div className={`nav-wrapper ${shouldScrollHeader ? '' : `${animation}`}  ${topStyle}`}
          onMouseEnter={() => setAnimation("animation-header-appear")}
          onMouseLeave={() => setAnimation("animation-header-disappear")}
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
              <img className="nav-logo" src={Images.LOGO} alt="logo" />
              <ul className="nav-link">
                <React.Fragment>
                  <li className={location.pathname === "/home" ? "active" : ""}>
                    <Link to="/home"> Trang chủ </Link>
                  </li>
                </React.Fragment>
                <React.Fragment>
                  <li
                    className={
                      location.pathname === "/nha-dat-ban" ? "active" : ""
                    }
                  >
                    <Link to="/nha-dat-ban"> Nhà đất bán </Link>
                  </li>
                </React.Fragment>
                <React.Fragment>
                  <li
                    className={
                      location.pathname === "/nha-dat-thue" ? "active" : ""
                    }
                  >
                    <Link to="/nha-dat-thue"> Nhà đất thuê </Link>
                  </li>
                </React.Fragment>
                {/* <React.Fragment>
                  <li
                    className={
                      location.pathname === "/danh-sach-phu-hop" ? "active" : ""
                    }
                  >
                    <Link to="/danh-sach-phu-hop"> Danh sách phù hợp </Link>
                  </li>
                </React.Fragment> */}
                <React.Fragment>
                  <li
                    className={
                      location.pathname === "/thong-ke" ? "active" : ""
                    }
                  >
                    <Link to="/thong-ke"> Thống kê bất động sản </Link>
                  </li>
                </React.Fragment>
                {/* <React.Fragment>
                                        <li className={path === "/dang-bai" ? "active" : ""}>
                                            <Link to='/dang-bai' > Đăng bài viết</Link>
                                        </li>
                                    </React.Fragment> */}
              </ul>
            </nav>
            {checkButtonSubmit()}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
