import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./pages/Listings";


function App() {
    const [content, setContent] = useState();

    return (
        <BrowserRouter>
            <div className="app">
                <Header setContent={setContent} />
                {content}
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default App;
