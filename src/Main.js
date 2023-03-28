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
import { useTranslation } from 'react-i18next';


const Main = () => {
    const [nav, setNav] = useState(false);

    const {t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

        return (
            <div>
                <HashRouter>
                    <div>
                        <header className="header">
                            <div className="header_container">
                                <div className="box">
                                    <div className="header_name">LLC "TokoyProm KG"</div>
                                    <div>
                                        <button onClick={() => changeLanguage('en')}>EN</button>
                                        <button onClick={() => changeLanguage('ky')}>KY</button>
                                    </div>
                                    <ScrollToTop smooth color="#8B4513" />
                                    <ul 
                                        className={
                                            nav ? ['menu', 'active'].join(' ') : ['menu']
                                        }
                                    >
                                        <ScrollToTopButtons />
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/">{t("firstPage")}</NavLink></a></li>
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/Veneer">{t("secondPage")}</NavLink></a></li>
                                        <li><a href="##" onClick={() => setNav(!nav)}><NavLink to="/WoodWool">{t("thirdPage")}</NavLink></a></li>
                                    </ul>
                                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                                        {nav ? <AiOutlineClose style={{color: "#FFF"}} size={25} /> : <AiOutlineMenu style={{color: "#FFF"}} size={20} />}
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="wrapper">
                            <Routes>
                                <Route path="/" element={<WoodPellets  t={t} />} exact/>
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