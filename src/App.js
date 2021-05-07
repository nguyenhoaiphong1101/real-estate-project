import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubmitList from "./pages/SubmitList";


function App() {
    const [content, setContent] = useState();
    const [enableFooter, setEnableFooter] = useState(true);

    return (
        <BrowserRouter>
            <div className="app">
                <Header setContent={setContent} setEnableFooter={setEnableFooter} />
                {content}
<<<<<<< HEAD
                {enableFooter ? <Footer /> : ''} */}
                <SubmitList />
=======
                {enableFooter ? <Footer /> : ''}
>>>>>>> da4154cc617d522530c3f48cb2641ef278ae40df
            </div>
        </BrowserRouter>
    );
}
export default App;
