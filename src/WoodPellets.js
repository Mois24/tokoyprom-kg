import React, {Component} from "react";
import "./WoodPellets.css";

class WoodPellets extends Component {
    render() {
        return (
            <main class="page">
            <div class="page__main-block main-block">
                <div class="main-block__container _container">
                    <div class="main-block__body">
                        <h1 class="main-block__title">Wood pellets </h1>
                        <div class="main-block__text">Pellets are a granular type of solid fuel of a cylindrical shape, made from compressed agricultural waste from the woodworking industry.</div>
                    </div>
                </div>
                <div class="main-block__image _ibg">
                    <img src={require("./images/wood_pellets/phone/pellet.jpg")} alt="cover"/>
                </div>
            </div>
            <section class="page__practise practise">
                <div class="practise__container _container">
                    <div class="practise__header header-block">
                        <h2 class="header-block__title">Advantages of using pellets - wood pellets</h2>
                    </div>
                    <div class="practise__body">
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                                High heat transfer
                                        </h4>
                                    </div>
                                    <div class="item-practse__text">
                                        Due to the high density, the heat transfer of pellets is several times higher compared conventional wood or coal. An important role is also played by the low moisture content of the pellets, this type of fuel contains no more than 8% moisture, while for wood this figure can reach 50%. 
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Environmental friendliness
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        Wood pellets can also be distinguished in terms of combustion rates, as they are considerably cleaner than traditional fuels. With the same volume burnt, pellets produce 30 times less carbon monoxide and form ash up to 1% of the burned volume, which can later be used as fertilizer for plants. 
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Security
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        Pellets are not subject to self-ignition. Gas, diesel fuel, fuel oil, coal can easily ignite, have a specific smell, seriously pollute the atmosphere if used improperly, so they must be handled with care. Pellets, due to their density, which they received during the pressing process, as well as the minimum content of fine debris and dust, are the best solution in terms of safety for people working with them. 
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Ease of storage
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        Wood pellets also have a relatively high bulk density, so their transportation and storage are more optimal than for traditional fuels. The production of pellets in Kyrgyz Republic is gaining momentum every year. Our company offers its customers low wholesale prices and delivery to the place. Convenient packaging of pellets (bags or big bags) allows us to quickly and reliably carry out the shipment process in a short time.  
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page__practise images">
                <div class="practise__container _container">
                    <div class="practise__header header-block">
                        <h2 class="header-block__title">Why prefer to work with us?</h2>
                    <div class="practise__body">
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Quick Production
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/process.jpg")} alt="Process"/>
                                </div>
                            </article>
                        </div>
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Eco-Friendly Raw Materials
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/first.JPG")} alt="Raw Materials"/>
                                </div>
                            </article>
                        </div>
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Certified Production
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/starter.jpg")} alt="Starter"/>
                                </div>
                            </article>
                        </div>
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Regular Quality Control
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/quality_control.jpg")}  alt="Quality Control"/>
                                </div>
                            </article>
                        </div>
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            Fast Deliveries
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/delivery.jpeg")} alt="A single source of truth"/>
                                </div>
                            </article>
                        </div>
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            High Efficiency Of Heat
                                        </h4>
                                    </div>
                                </div>
                                <div class="item-practise__image _ibg">
                                    <img src={require("./images/wood_pellets/gallery/equipment.jpg")} alt="A single source of truth"/>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section class="page__whoweare whoweare">
                <div class="whoweare__container _container">
                    <div class="whoweare__header header-block">
                        <h2 class="header-block__title">Pellet manufacturing technology </h2>
                        <div class="header-block__sub-title">The production of pellets includes pressing of pre-dried to a certain moisture content and 
                            crushed to a given fraction of waste under a pressure of about 300 atmospheres. At the same time, 
                            the use of glue and other additives is prohibited (sometimes dishonest dealers add sand and other 
                            non-combustible impurities to them to increase the weight of the granules, and synthetic polymers to ensure gluing abilities). </div>
                    </div>
                    <div class="whoweare__body">
                        <div class="whoweare__video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0v5qV4ushzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="whoweare__content">
                            <div class="whoweare__top">
                                <h2 class="whoweare__title">High-Quality Materials</h2>
                                <div class="whoweare__text">
                                    <ul>The main materials for the manufacture of fuel pellets are:</ul>
                                    <li class="whoweare__text-list">sawdust, wood chips, bark, slabs of coniferous and deciduous (best option) wood species;</li>
                                    <li>peat;</li>
                                    <li>sunflower husk (the most common solution), rapeseed (the best option), straw of various grain crops, corn, husks, cake and much more;</li>
                                    <li>charcoal;</li>
                                    <li>household waste.</li><br/>
                                    <p>The basic binder is a substance of plant origin - lignin, a natural polymer contained in almost any plant, 
                                    capable of plasticizing during granulation under the influence of a sufficiently high operating temperature.
                                    </p>
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
export default WoodPellets;