import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router-dom";
import UserWrapper from './pages/User';
import AdminWrapper from './pages/Admin/Manage';
import NotFound from './pages/User/NotFound';
import Header from './components/Header';
import HeaderAdmin from './pages/Admin/Manage/components/Header'
import Footer from './components/Footer';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import jwt_decode from "jwt-decode";
import ReactLoading from 'react-loading';

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
                        <ReactLoading color={'#000'} type={'spinningBubbles'} height={'10%'} width={'10%'} />
                    </div>
                    :
                    <div className="app" >
                        <Header setEnableFooter={setEnableFooter} path={path} setLoading={setLoading} role={returnRole()} />
                        {/* {token ? jwt_decode(token).role === "ADMIN" && location.pathname.includes('/admin') ? <HeaderAdmin />
                            : <Header setEnableFooter={setEnableFooter} path={path} /> : <Header setEnableFooter={setEnableFooter} path={path} />} */}
                        <Switch>
                            <Route path="/admin" exact>
                                <AdminWrapper />
                            </Route>
                            <Route path="/" exact>
                                <UserWrapper />
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
    );
}
export default App;
