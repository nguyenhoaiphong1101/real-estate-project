import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailHome from "./pages/DetailHome";
import Home from "./pages/Home";
import Listings from "./pages/Listings";

function App() {
    return (
        <div className="app">
            <Header />
            <Listings />
            <Footer />
        </div>
    );
}
export default App;
