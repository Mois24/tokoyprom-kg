import React, {Component} from "react";

import Contacts from "./Contacts";
import Info from "./Info";
class Footer extends Component {
    render() {
        return (
            <div>
                <Info />
                <Contacts  />
            </div>
        );
    }
}
export default Footer;