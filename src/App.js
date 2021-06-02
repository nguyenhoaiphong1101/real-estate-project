import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminWrapper from './pages/Admin/Manage';
import UserWrapper from './pages/User';
import DetailHome from "./pages/User/DetailHome";
import Home from "./pages/User/Home";
import Listings from "./pages/User/Listings";
import Login from './pages/User/Login';
import NotFound from './pages/User/NotFound';
import Profile from "./pages/User/Profile";
import Signup from './pages/User/Signup';
import SubmitList from "./pages/User/SubmitList";

function App() {

    const location = window.location;

    const [enableFooter, setEnableFooter] = useState(true);
    const [path, setPath] = useState('');
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    const localToken = localStorage.getItem('access_token')

    const returnRole = () => {
        if (token !== null && jwt_decode(token).role === "ADMIN" && location.pathname.includes('/admin')) {
            return 'ADMIN'
        } else {
            return 'USER'
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [token])

    useEffect(() => {
        setToken(localToken);
    }, [localToken])

    return (
        <BrowserRouter >
            {
                loading ?
                    <div className="loading">
                        <ReactLoading color={'#000'} type={'spinningBubbles'} height={'5%'} width={'5%'} />
                    </div>
                    :
                    <div className="app" >
                        <Header setEnableFooter={setEnableFooter} path={path} setLoading={setLoading} role={returnRole()} />
                        <Switch>
                            <Route path="/admin" exact>
                                <AdminWrapper />
                            </Route>
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
                            <Route path="/nha-dat-ban" >
                                <Listings title="Nhà đất bán" />
                            </Route>
                            <Route path="/nha-dat-thue" >
                                <Listings title="Nhà đất thuê" />
                            </Route>
                            <Route path="/dang-nhap" exact >
                                <Login />
                            </Route>
                            <Route path="/dang-ky" exact>
                                <Signup />
                            </Route>
                            <Route>
                                <Header setEnableFooter={setEnableFooter} />
                                <NotFound />
                                <Footer />
                            </Route>
                        </Switch>
                    </div>
            }
        </BrowserRouter>
        // <Home />
    );
}
export default App;
