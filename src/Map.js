import React, {Component} from "react";

const divMap = {
    position: "relative",
    overflow: "hidden"
}
const Name = {
    color: "#eee",
    fontSize: "12px",
    position: "absolute",
    top: "0px"
}
const NameStreet = {
    color: "#eee",
    fontSize: "12px", 
    position: "absolute", 
    top: "14px"
}
const Frameborder = {
    frameborder: "1" 
}
const Allowfullscreen = {
    allowfullscreen: "true"
}
const Iframe = {
    display: "block"
}
class Map extends Component {
    render() {
        return (
            <div>
                <div className="map" style={divMap}>
                    <a href="https://yandex.by/maps/167/azerbaijan/?utm_medium=mapframe&utm_source=maps" style={Name}>Azerbaijan</a>
                    <a href="https://yandex.by/maps/167/azerbaijan/house/YEAYfg5jTU0FQFpqfX94dH9gYA==/?from=mapframe&ll=49.893482%2C40.395334&utm_medium=mapframe&utm_source=maps&z=16" 
                    style={NameStreet}>Pushkin Street, 141, Azerbaijan — Yandex Maps</a>
                    <iframe src="https://yandex.by/map-widget/v1/-/CCUvRQA5LC" 
                    frameborder={Frameborder}
                    allowfullscreen={Allowfullscreen} 
                    style={Iframe}>
                    </iframe>  
                </div>
            </div>
        );
    }
}
export default Map;