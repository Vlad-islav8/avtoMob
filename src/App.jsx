import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from './components/Home/Home.jsx';
import CarCatalog from './components/CarCatalog/CarCatalog.jsx';
import Search from './components/Search/search.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

function App() {
    return (
        <Router basename='/avtoMob'>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                   <Route path="/catalog" element={<CarCatalog />} />
                   <Route path="/search" element={<Search />} />
                   <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;