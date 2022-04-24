import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../../components/Footer";
import DetailHome from "./DetailHome";
import Home from "./Home";
import Listings from "./Listings";
import Profile from "./Profile";
import SubmitList from "./SubmitList";
import "./styles.scss";
import ListCompare from "../../components/ListCompare";

function UserWrapper(props) {
  return (
    <div className="user">
      {/* <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chi-tiet">
          <DetailHome />
        </Route>
        <Route path="/trang-ca-nhan">
          <Profile />
        </Route>
        <Route path="/dang-bai">
          <SubmitList />
        </Route>
        <Route path="/danh-sach">
          <Listings />
        </Route>
      </Switch>
      <Footer /> */}
    </div>
  );
}

export default UserWrapper;
