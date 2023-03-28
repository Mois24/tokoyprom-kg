import { t } from "i18next";
import React, {Component} from "react";
import "./WoodPellets.css";


class WoodPellets extends Component {
    render() {
        return (
            <main class="page">
            <div class="page__main-block main-block">
                <div class="main-block__container _container">
                    <div class="main-block__body">
                        <h1 class="main-block__title"> {this.props.t('firstPage')} </h1>
                        <div class="main-block__text">{this.props.t('mainDescription')}</div>
                    </div>
                </div>
                <div class="main-block__image _ibg">
                    <img src={require("./images/wood_pellets/phone/pellet.jpg")} alt="cover"/>
                </div>
            </div>
            <section class="page__practise practise">
                <div class="practise__container _container">
                    <div class="practise__header header-block">
                        <h2 class="header-block__title">{this.props.t('advantages')}</h2>
                    </div>
                    <div class="practise__body">
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            {this.props.t('advantagesFirst')} 
                                        </h4>
                                    </div>
                                    <div class="item-practse__text">
                                        {this.props.t('advantagesFirstDescription')}  
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            {this.props.t('advantagesSecond')} 
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        {this.props.t('advantagesSecondDescription')} 
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            {this.props.t('advantagesThird')}
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        {this.props.t('advantagesThirdDescription')} 
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="practise__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <a href="" class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            {this.props.t('advantagesFourth')} 
                                        </h4>
                                    </a>
                                    <div class="item-practse__text">
                                        {this.props.t('advantagesFourthDescription')}  
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
                        <h2 class="header-block__title">{this.props.t('prefer')} </h2>
                    <div class="practise__body">
                        <div class="images__column">
                            <article class="practise__item item-practise">
                                <div class="item-practise__content">
                                    <div class="item-practise__link">
                                        <h4 class="item-practise__title">
                                            {this.props.t('preferFirst')}
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
                                            {this.props.t('preferSecond')}
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
                                            {this.props.t('preferThird')}
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
                                            {this.props.t('preferFourth')}
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
                                            {this.props.t('preferFifth')}
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
                                            {this.props.t('preferSixth')}
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
                        <h2 class="header-block__title">{this.props.t('manufacturingTechnology')} </h2>
                        <div class="header-block__sub-title">{this.props.t('manufacturingTechnologyDescription')} </div>
                    </div>
                    <div class="whoweare__body">
                        <div class="whoweare__video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0v5qV4ushzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div class="whoweare__content">
                            <div class="whoweare__top">
                                <h2 class="whoweare__title">{this.props.t('highQualityMaterials')}</h2>
                                <div class="whoweare__text">
                                    <ul>{this.props.t('qualityHeader')}</ul>
                                    <li class="whoweare__text-list">{this.props.t('qualityFirst')}</li>
                                    <li>{this.props.t('qualitySecond')}</li>
                                    <li>{this.props.t('qualityThird')}</li>
                                    <li>{this.props.t('qualityFourth')}</li>
                                    <li>{this.props.t('qualityFifth')}</li><br/>
                                    <p>{this.props.t('qualityFinished')}</p>
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