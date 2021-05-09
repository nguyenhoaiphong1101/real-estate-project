import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubmitList from "./pages/SubmitList";
import AgentArchive from "./pages/Agents/AgentArchive"


function App() {
    const [content, setContent] = useState();
    const [enableFooter, setEnableFooter] = useState(true);

    return (
        <BrowserRouter>
            <div className="app">
                {/* <Header setContent={setContent} setEnableFooter={setEnableFooter} />
                {content}
                {enableFooter ? <Footer /> : ''} */}
                <AgentArchive />
            </div>
        </BrowserRouter>
    );
}
export default App;
