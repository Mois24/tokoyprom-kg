import React, {Component} from "react";

import Map from "./Map";
import "./Info.css";
import "./Main.css";

class Info extends Component {
    render() {
        return (
            <div className="page__practise page_address">
                <div className="whoweare__container _container">
                    <div className="address">
                        LLC "TokoyProm KG"<br/>
                        +996 999 007 114 
                    </div>
                </div>
                <Map />
            </div>
        );
    }
}
export default Info;