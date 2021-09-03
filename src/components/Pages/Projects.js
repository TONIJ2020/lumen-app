import React, { Component } from 'react';
import wuyeSite from '../../Assets/Wuye-overview.jpg';
import kubwaSite from '../../Assets/Kubwa 3D.jpeg';
import jahiSite from '../../Assets/Jahi TopView.jpeg';
import mabushiSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import kadoSite from '../../Assets/Kado Full frontView.jpeg';
import karuSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import kubwa2Site from '../../Assets/Wuye-5-bedroom-view.jpg';
import lugbeSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import karmoSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import gaduwaSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import FDBD43D from '../../Assets/3D 4 Bed Fully dETACHED.jpg';
import BD53D from '../../Assets/new 5bed 3D.jpg';
import BD43D from '../../Assets/3D 4Bedroom on 2 floors roofless.jpg';
import BD33D from '../../Assets/3-Bedroom Flat on 2 floors 3D.jpeg';
import BD43DR from '../../Assets/4 Bedroom Terr 3D.jpg';
import BD33DR from '../../Assets/3 Bedroom Flat 3D.jpg';
import BD23D from '../../Assets/3D 2-Bedroom Flat.jpeg';

import '../../Styles/slider.css';

export default class Projects extends Component {
    render() {
        const responsiveSlider = function() {

        let slider = document.getElementById("slider");
        let sliderWidth = slider.offsetWidth;
        let slideList = document.getElementById("slideWrap");
        let count = 1;
        let items = slideList.querySelectorAll("li").length;
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");

        window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
        });

        const prevSlide = function() {
        if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count === 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        };

        const nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count === items) {
            slideList.style.left = "0px";
            count = 1;
        }
        };

        next.addEventListener("click", function() {
        nextSlide();
        });

        prev.addEventListener("click", function() {
        prevSlide();
        });

        setInterval(function() {
        nextSlide()
        }, 8000);

        };

        window.onload = function() {
        responsiveSlider();  
        }
        return (
            <div>
                <div className="slider-div">
                    <div id="gallery" className="gallery-title">
                        <h4>Available House Types</h4>
                    </div>

                    <div id="slider">
                        <ul id="slideWrap"> 
                            <li><h4>4 Bedroom Fully Detached Duplex on one Floor</h4><img src={FDBD43D} alt=""/></li>
                            <li><h4>5 Bedroom Terraced Duplex on 2 Floors</h4><img src={BD53D} alt=""/></li>
                            <li><h4>4 Bedroom Terraced Duplex on 2 Floors</h4><img src={BD43D} alt=""/></li>
                            <li><h4>3 Bedroom Flat on 2 Floors</h4><img src={BD33D} alt=""/></li>
                            <li><h4>4 Bedroom Terraced Duplex on 2 Floors</h4><img src={BD43DR} alt=""/></li>
                            <li><h4>3 Bedroom Flat on 2 Floors</h4><img src={BD33DR} alt=""/></li>
                            <li><h4>2 Bedroom Flat on 2 Floors</h4><img src={BD23D} alt=""/></li>
                        </ul>

                        <a id="prev" href="#1">&#8810;</a>
                        <a id="next" href="#1">&#8811;</a>   
                    </div>
                </div>
                <div id="gallery" className="gallery-section">
                    <div className="gallery-content">
                        <h4>Our Projects</h4>
                        <p>We have completed projects in Karmo, Mabushi, Wuye, Jahi, Karu and Kubwa Districts within the past five (5) years and have many constructions on-going and at the verge of completion in our sites at Kado, Lugbe and Gaduwa Districts.</p>
                    </div>

                    <div className="gallery-img">
                        <div>
                            <div id="kubwa" className="img">
                                <a href="/kubwa"><img src={kubwaSite} alt=""/></a>
                                <p>Kubwa Site</p>
                            </div>
                            <div id="wuye" className="img">
                                <a href="/wuye"><img src={wuyeSite} alt=""/></a>
                                <p>Wuye Site</p>
                            </div>
                        </div>
                        <div>
                            <div id="mabushi" className="img">
                                <a href="/mabushi"><img src={mabushiSite} alt=""/></a>
                                <p>Mabushi Site</p>
                            </div>
                            <div id="jahi" className="img">
                                <img src={jahiSite} alt=""/>
                                <p>Jahi Site</p>
                            </div>
                        </div>
                        <div>
                            <div id="kado" className="img">
                                <img src={kadoSite} alt=""/>
                                <p>Kado Site</p>
                            </div>
                            <div id="gaduwa" className="img">
                                <img src={gaduwaSite} alt=""/>
                                <p>Gaduwa Site</p>
                            </div>
                        </div>
                        <div>
                            <div id="karu" className="img">
                                <img src={karuSite} alt=""/>
                                <p>Karu Site</p>
                            </div>
                            <div id="lughe" className="img">
                                <img src={lugbeSite} alt=""/>
                                <p>Lugbe Site</p>
                            </div>
                        </div>
                        <div>
                            <div id="karmo" className="img">
                                <img src={karmoSite} alt=""/>
                                <p>Karmo Site</p>
                            </div>
                            <div id="kubwa2" className="img">
                                <img src={kubwa2Site} alt=""/>
                                <p>Kubwa II Site</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
