import React, { useState } from 'react';
import { Redirect, Route, Switch } from "react-router";
import Footer from "../../components/Footer";
import DetailHome from "./DetailHome";
import Home from "./Home";
import Listings from "./Listings";
import Profile from "./Profile";
import SubmitList from "./SubmitList";
import "./styles.scss"

function UserWrapper(props) {
    const [enableFooter, setEnableFooter] = useState(true);
    return (
        <div className="user">
            <Switch>

                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/chi-tiet" >
                    <DetailHome />
                </Route>
                <Route path="/trang-ca-nhan" >
                    <Profile />
                </Route>
                <Route path="/dang-bai" >
                    <SubmitList />
                </Route>
                <Route path="/danh-sach" >
                    <Listings />
                </Route>
                <Route>
                    <Redirect to="/home" />
                </Route>
            </Switch>
            {enableFooter ? <Footer /> : ''}
        </div>
    );
}

export default UserWrapper;