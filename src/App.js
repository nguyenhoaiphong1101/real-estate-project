import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./pages/User/Listings";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import SubmitList from "./pages/User/SubmitList";
import AgentDetail from "./pages/User/Agents/AgentDetail"
import Manage from "./pages/Admin/Manage"
import loginApi from './api/loginApi';


function App() {
    const [content, setContent] = useState();
    const [enableFooter, setEnableFooter] = useState(true);

    return (
        <BrowserRouter>
            <div className="app">
                <Header setContent={setContent} setEnableFooter={setEnableFooter} />
                {content}
                {enableFooter ? <Footer /> : ''}
                {/* <Manage /> */}
            </div>
            {/*<Switch>
                <Route path="/" exact>
                    <Redirect push to="/create-organization" />
                </Route>
                <Route path="/userinformation/:id">
                    <UserInformation />
                </Route>
                <Route path="/group"></Route>
                <Route path="/create-organization">
                    <CreateOrganization />
                </Route>
                <Route path="/organization/:id">
                    <Organization />
                </Route>
                <Route path="/profile/:id">
                    <UserProfile />
                </Route>
                <Route path="/user/:id">
                    <User />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            */}
        </BrowserRouter>
    );
}
export default App;
