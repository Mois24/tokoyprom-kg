import React, {Component} from "react";
import "./Veneer.css";

class Veneer extends Component {
    render() {
        return (
            <main class="page">
            <div class="page__second-block second-block">
                <div class="second-block__container _container">
                    <div class="second-block__body">
                        <h1 class="second-block__title">Veneer </h1>
                        <div class="second-block__text">It is a natural material. It is a thin sheet made of natural wood of various breeds.</div>
                    </div>
                </div>
                <div class="second-block__image _ibg">
                    <img src={require("./images/veneer/veneer.jpg")} alt="cover"/>
                </div>
            </div>
            <section class="page__peeling peeling">
                <div class="peeling__container _container">
                    <div class="peeling__header header-block">
                        <h2 class="header-block__title">Veneer Peeling </h2>
                        <div class="header-block__sub-title">This is a wood processing process consisting of cutting the top layer of wood fibres <br/> with a wooden blank rotating about its axis.</div>
                    </div>
                    <div class="peeling__body">
                        <div class="peeling__video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OT2cM8X638Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="peeling__content">
                            <div class="peeling__top">
                                <h2 class="peeling__title">Basic steps for peeling veneer:</h2>
                                <div class="peeling__text">
                                    <ul>
                                        <li>carrying out the assembly of veneer using the installation of gears, as well as measurements of cutting and marking knives according to the specification of the order;</li>
                                        <li>submit a pre-prepared churak of a given need for a hydraulic clamp;</li>
                                        <li>center and fix the churak in hydraulic clamps;</li>
                                        <li>turn on the rotation of the hydraulic clamps;</li>
                                        <li>turn on knife feed;</li>
                                        <li>turn off the rotation of the hydraulic clamps immediately after the start of peeling;</li>
                                        <li>turn on the supply of the clamping bar;</li>
                                        <li>turn on the rotation of the hydraulic clamps;</li>
                                        <li>carry out veneer peeling.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page__produce produce">
                <div class="produce__container _container">
                <div class="peeling__header header-block">
                        <h2 class="header-block__title">Production of veneer sheets </h2>
                        <div class="header-block__sub-title">Sheet production involves cutting pre-prepared peeled <br/> veneer into sheets of uniform dimensions.</div>
                    </div>
                    <div class="produce__body">
                        <div class="produce__content">
                            <div class="produce__top">
                                <div class="produce__pic">
                                    <img src={require("./images/veneer/01.jpg")} alt="cover"/>
                                </div>
                                <h2 class="produce__title">Preparation for transportation <br/> of our products</h2>
                            </div>
                        </div>
                        <div>
                            <div class="produce__video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/LKn4mje1rnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div class="produce__cut">
                                <h2 class="produce__title">Cutting strips in width:</h2>
                                <div class="produce-block__sub-title">-feed a strip of peeled veneer to a dividing machine; <br/>
                                - cut into strips of a given width and <br /> in the required quantity.
                                <h3>Perform quality control at least 4 times for each size. <br/> Roulette tool.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page__basket basket">
                <div class="basket__container _container">
                    <div class="basket__header header-block">
                        <h2 class="header-block__title">Basket assembly </h2>
                        <div class="header-block__sub-title">Our baskets are an environmental product and a safe alternative to plastic.</div>
                    </div>
                    <div class="basket__body">
                        <div class="basket__video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y8NjEyFVS0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="basket__content">
                            <div class="basket__top">
                                <h2 class="basket__title">Basket assembly by stage:</h2>
                                <div class="basket__text">
                                    <ul>
                                        <li>assemble the base from the strips;</li>
                                        <li>assemble the sides from the strips. Assembly is carried out by weaving according to the technological map;</li>
                                        <li>make the final assembly of the longitudinal side 1, insert the inner shell;</li>
                                        <li>fasten with 1st staple or 1st locking stitch, insert outer shell, secure with staples or locking stitches;</li>
                                        <li>make the final assembly of the longitudinal side 2 in the same way;</li>
                                        <li>assemble the end side 1, insert the inner shell, fix the outer shell;</li>
                                        <li>fasten the fastening strips with a staple or locking stitches. Assemble the end side 2 in the same way;</li>
                                        <li>assemble the handle from 3 strips of veneer, secure with staples or locking stitches.</li>
                                        <b>Perform quality control visually and externally.</b>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page__gallery gallery">
                <div class="gallery__container _container">
                    <div class="gallery__header header-block">
                        <h2 class="header-block__title">Process and results of our company</h2>
                    <div class="gallery__body">
                        <div class="images__column">
                            <div class="item-gallery__vertical-image _ibg">
                                <img src={require("./images/veneer/03.jpg")} alt="Put Product"/>
                            </div>
                        </div>
                        <div class="images__column">
                            <div class="item-gallery__vertical-image _ibg">
                                <img src={require("./images/veneer/05.jpg")} alt="Process"/>
                            </div>
                        </div>
                        <div class="images__column">
                            <div class="item-gallery__vertical-image _ibg">
                                <img src={require("./images/veneer/06.jpg")} alt="Basket With Peaches"/>
                            </div>
                        </div>
                        <div class="images__column">
                            <div class="item-gallery__adaptive-image _ibg">
                                <img src={require("./images/veneer/07.jpg")} alt="Basket"/>
                            </div>
                        </div>
                        <div class="images__column">
                            <div class="item-gallery__image _ibg">
                                <img src={require("./images/veneer/22.jpg")} alt="Basket With Strawberries"/>
                            </div>
                        </div>
                        <div class="images__column">
                            <div class="item-gallery__image _ibg">
                                <img src={require("./images/veneer/04.jpg")} alt="Basket With Mushrooms"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
        );
    }
}
export default Veneer;