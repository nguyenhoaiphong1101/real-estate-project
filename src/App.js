import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListCompare from "./components/ListCompare";
import { doAxiosRequestIntercept } from "./config/interceptor";
import AdminWrapper from "./pages/Admin/Manage";
import Compare from "./pages/User/Compare";
import DetailHome from "./pages/User/DetailHome";
import Home from "./pages/User/Home";
import Listings from "./pages/User/Listings";
import Login from "./pages/User/Login";
import NotFound from "./pages/User/NotFound";
import Profile from "./pages/User/Profile";
import Recommend from "./pages/User/Recommend";
import Signup from "./pages/User/Signup";
import Statistical from "./pages/User/Statistical";
import SubmitList from "./pages/User/SubmitList";
import "./styles.scss";
import Chat from "./chat";
import "./App.less";
import { loadCountry, loadProvince } from "./actions/search";
import { useDispatch } from "react-redux";
import { loadListCategory } from "./actions/category";
import { getInfoUser } from "./actions/user";

function App() {
  const location = window.location;

  const [token, setToken] = useState(localStorage.getItem("access_token"));

  const localToken = localStorage.getItem("access_token");
  const dispatch = useDispatch();

  const returnRole = () => {
    if (
      token !== null &&
      jwt_decode(token).role === "ADMIN" &&
      location.pathname.includes("/admin/can-ho")
    ) {
      return "ADMIN";
    } else {
      return "USER";
    }
  };

  useEffect(() => {
    dispatch(loadProvince());
    dispatch(loadListCategory());
    dispatch(loadCountry());
    if (token) {
      dispatch(getInfoUser());
    }
  }, []);

  useEffect(() => {
    setToken(localToken);
  }, [localToken]);

  doAxiosRequestIntercept();
  return (
    <BrowserRouter>
      <div className="app">
        <Header role={returnRole()} />
        {returnRole() !== "ADMIN" ? (
          <div className="compare">
            <ListCompare />
          </div>
        ) : null}
        <Switch>
          {token !== null &&
            jwt_decode(token).role === "ADMIN" &&
            location.pathname.includes("/admin/can-ho") && <AdminWrapper />}
          <Route path="/home" exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/chi-tiet/:id">
            <DetailHome />
            <Footer />
          </Route>
          <Route path="/trang-ca-nhan">
            <Profile />
            <Footer />
          </Route>
          <Route path="/chinh-sua/:id">
            <SubmitList />
            <Footer />
          </Route>
          <Route path="/dang-bai">
            <SubmitList />
            <Footer />
          </Route>
          <Route path="/nha-dat-ban">
            <Listings title="Nhà đất bán" />
            <Footer />
          </Route>
          <Route path="/nha-dat-thue">
            <Listings title="Nhà đất thuê" />
            <Footer />
          </Route>
          <Route path="/dang-nhap" exact>
            <Login />
          </Route>
          <Route path="/dang-ky" exact>
            <Signup />
          </Route>
          <Route path="/so-sanh/:id" exact>
            <Compare title="So sánh bất động sản" />
            <Footer />
          </Route>
          <Route path="/thong-ke" exact>
            <Statistical title="Thống kê bất động sản" />
            <Footer />
          </Route>
          <Route path="/danh-sach-phu-hop" exact>
            <Recommend />
            <Footer />
          </Route>
          {location.pathname === "/" &&
          location.pathname !== "/admin/can-ho" ? (
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          ) : null}
          <Route>
            <Header />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
        <Chat />
      </div>

      {/* )} */}
    </BrowserRouter>
    // <Home />
  );
}
export default App;
