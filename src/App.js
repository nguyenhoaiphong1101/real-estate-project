import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./pages/User/Listings";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import SubmitList from "./pages/User/SubmitList";
import AgentDetail from "./pages/User/Agents/AgentDetail"
import Manage from "./pages/Admin/Manage"


function App() {
    const [content, setContent] = useState();
    const [enableFooter, setEnableFooter] = useState(true);

    return (
        <BrowserRouter>
            <div className="app">
                {/* <Header setContent={setContent} setEnableFooter={setEnableFooter} />
                {content}
                {enableFooter ? <Footer /> : ''} */}
                <Manage />
            </div>
        </BrowserRouter>
    );
}
export default App;
