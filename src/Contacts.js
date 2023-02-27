import React, {Component} from "react";

import Company from "./images/icons/company.svg";
import Address from "./images/icons/address.svg";
import Telephone from "./images/icons/telephone.svg";
import Gmail from "./images/icons/Gmail.svg";

import "./Contacts.css";
import "./Main.css";

class Contacts extends Component {
    render() {
        return (
            <footer class="footer">
                <div class="footer__bottom">
                    <div class="footer__container _container">
                        <div class="footer__copy">
                            <div class="footer__combo">
                                <div class="item-whoweare__icon">
                                    <img src={Company} alt="Company"/>
                                </div>
                                <div class="footer__text">LLC "TokoyProm KG"</div>
                            </div>
                            <div class="footer__combo">
                                <div class="item-whoweare__icon">
                                    <img src={Address} alt="Adress"/>
                                </div>
                                <div class="footer__text">Republic of Kyrgystan, Chuyskaya Region,<br/> Pushkina str., building 141</div>
                            </div>
                            <div class="footer__combo">
                                <div class="item-whoweare__icon">
                                    <img src={Telephone} alt="Telephone"/>
                                </div>
                                <div class="footer__text">+996 999 007 114</div>
                            </div>
                            <div class="footer__combo">
                                <div class="item-whoweare__icon">
                                    <img src={Gmail} alt="Gmail.com"/>
                                </div>
                                <div class="footer__text">m.arna0404@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Contacts;