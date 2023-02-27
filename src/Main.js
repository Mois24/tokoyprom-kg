import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopButtons from "./ScrollToTopButtons";
import "./Main.css";
import WoodPellets from "./WoodPellets";
import WoodWool from "./WoodWool";
import Footer from "./Footer";
import Veneer from "./Veneer";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";


const Main = () => {
    const [nav, setNav] = useState(false)
        return (
            <div>
                <HashRouter>
                    <div>
                        <header className="header">
                            <div className="header_container">
                                <div className="box">
                                    <div className="header_name">LLC "TokoyProm KG"</div>
                                    <ScrollToTop smooth color="#8B4513" />
                                    <ul 
                                        className={
                                            nav ? ['menu', 'active'].join(' ') : ['menu']
                                        }
                                    >
                                        <ScrollToTopButtons />
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/">Wood Pellets</NavLink></a></li>
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/Veneer">Veneer Peeling</NavLink></a></li>
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/WoodWool">Wood Wool</NavLink></a></li>
                                    </ul>
                                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                                        {nav ? <AiOutlineClose style={{color: "#FFF"}} size={25} /> : <AiOutlineMenu style={{color: "#FFF"}} size={20} />}
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="wrapper">
                            <Routes>
                                <Route path="/" element={<WoodPellets />} exact/>
                                <Route path="/Veneer" element={<Veneer />} exact/>
                                <Route path="/WoodWool" element={<WoodWool />} exact/>
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
                <Footer />
            </div>
        );
    }
export default Main;