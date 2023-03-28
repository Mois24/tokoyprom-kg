import React, {Component} from "react";
import "./WoodWool.css";

class WoodWool extends Component {
    render() {
        return (
            <main class="page">
            <div class="page__third-block third-block">
                <div class="third-block__container _container">
                    <div class="third-block__body">
                        <h1 class="third-block__title">Wood Wool</h1>
                        <div class="third-block__text">Environmentally responsible wood materials...</div>
                    </div>
                </div>
                <div class="third-block__image _ibg">
                    <img src={require("./images/wood_wool/wood_wool2.jfif")} alt="cover"/>
                </div>
            </div>
            <section class="page__wool wool">
                <div class="wool__container _container">
                    <div class="wool__header header-block">
                        <h2 class="header-block__title">Wood Wool manufacturing process</h2>
                        <div class="header-block__sub-title">The main material for this product is healthy softwood and hardwood.</div>
                    </div>
                    <div class="wool__body">
                        <div class="wool__video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MSprLFFtkIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="wool__content">
                            <div class="wool__top">
                                <h2 class="wool__title">Technical description of the manufacturing of wood wool:</h2>
                                <div class="wool__text">
                                    <ul>
                                        <li>mark the trunk of a tree of coniferous or deciduous (birch, aspen) species using a marking board in the required size, 30-50 cm long;</li>
                                        <li>cut strictly vertically according to preliminary marking;</li>
                                        <li>barking a churak (barking is done in two ways: with an ax, or on a peeling machine);</li>
                                        <li>to clean the churak;</li>
                                        <li>the churak is subjected to heat treatment (drying) at a temperature of 60 degrees Celsius and holding until reaching 15-20% humidity with forced ventilation;</li>
                                        <li>use blocks with a diameter according to the technical characteristics of the machine used;</li>
                                        <li>place the churak of the required length and diameter in the machine for the production of wood wool;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page__info info">
                <div class="info__container _container">
                    <div class="info__header header-block">
                        <h2 class="header-block__title">Manufacturing of Wood Wool</h2>
                        <div class="header-block__sub-title">Wool made of wood is distinguished by ecology, unpretentiousness, aesthetic appearance.</div>
                    </div>
                    <div class="info__body">
                        <div class="description__content">
                             <div class="description__top">
                                <h2 class="description__title">Technical description of the manufacturing of wood wool:</h2>
                                <div class="description__text">
                                    <ul>
                                        <li>if necessary, sharpen knives on a knife sharpening machine;</li>
                                        <li>set up the machine according to the specification;</li>
                                        <li>complete planing of the strips of the required width and in the required quantity;</li>
                                        <li>press the finished wood wool into bales of the required sizes;</li>
                                        <li>tying bales with pressed wood wool with polypropylene tape;</li>
                                        <li>packing bales of pressed wood wool on wooden pallets.</li>
                                    </ul>
                                    <div class="description__text">
                                        <ul><p>Stored in bags or special compressed bales. The remarkable properties of wood wool are as follows:</p>
                                            <li>it’s a good air pocket.;</li>
                                            <li>poor thermal conductivity;</li>
                                            <li>guaranteed sustainability;</li>
                                            <li>possibility of careful storage of the item in cleanliness.</li>
                                        </ul>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div class="info__content">
                            <div class="info__top">
                                <div class="info__pic">
                                    <img src={require("./images/wood_wool/wool.jpg")} alt="cover"/>
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
export default WoodWool;