import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "./Home"
import DetailHome from "./DetailHome"
import Profile from "./Profile"
import SubmitList from "./SubmitList"
import Listings from "./Listings"
import NotFound from "./NotFound"
import Login from './Login';
import Signup from './Signup';

function UserWrapper(props) {
    const [enableFooter, setEnableFooter] = useState(true);
    return (
        <BrowserRouter>
            <div className="user">
                <Switch>
                    <Route path="/" exact>
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
                </Switch>
                {enableFooter ? <Footer /> : ''}
            </div>
        </BrowserRouter>
    );
}

export default UserWrapper;