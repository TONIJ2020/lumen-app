import React, { Component } from 'react';
import WuyeSite from '../../Assets/Wuye-4-bedroom-view.jpg';
import WuyeSite1 from '../../Assets/Wuye-5-bedroom-view.jpg';
import WuyeSite2 from '../../Assets//Wuye-front-view.jpg';
import WuyeSite3 from '../../Assets/Wuye-gate-view.jpg';
import WuyeSite4 from '../../Assets/Wuye-overview.jpg';
import WuyeSite5 from '../../Assets/Wuye-Site-Layout.jpg';

export default class Wuye extends Component {
    render() {
        const responsiveSlider = function() {

        let slider = document.getElementById("wuye-slider");
        let sliderWidth = slider.offsetWidth;
        let slideList = document.getElementById("wuye-slideWrap");
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
        }, 5000);

        };

        window.onload = function() {
        responsiveSlider();  
        }

        return (
            <div>
                <div id="wuye" className="wuye-site">
                    <div className="wuye-site-heading">
                        <h3>Wuye Site</h3>
                        <p>Our Mabushi Site is a medium estate comprising 54 families of Eleven (11) units of 5-Bedroom Terraced Duplex on 2 floors, Twenty-Five (25) units of 4-Bedroom Terraced Duplex on 2 floors, Two (2) units of 4-Bedroom Semi-Detached Duplex on 1 floor, and Sixteen (16) units of 3-Bedroom Flat on 3 suspended floors</p>
                        <h6>Two (2), One (1), Zero (0) and Three (3) units, respectively,  are available in the above configurations. Each terraced duplex unit is on its own with a combination of simple opulence and deluxe economy for a senior staff. It boasts of its own separate compound space allowing it maximum privacy and complete family life without any external intrusion. With a front porch then a door that ushers one into a large free flowing airy living room, whilst the staircase is separated for privacy. It has direct access to the kitchen which is also connected to the dining room.</h6>
                    </div>
                    <div id="wuye-slider" className="wuye-img-slider-div">
                        <ul id="wuye-slideWrap"> 
                            <li><h4>4-Bedroom Terraced Duplex on 2 floors</h4><img src={WuyeSite} alt="" /></li>
                            <li><h4>5-Bedroom Terraced Duplex on 2 floors</h4><img src={WuyeSite1} alt="" /></li>
                            <li><h4>Front View of Wuye Site</h4><img src={WuyeSite2} alt="" /></li>
                            <li><h4>Gate View of Wuye Site</h4><img src={WuyeSite3} alt="" /></li>
                            <li><h4>OverView of Wuye Site</h4><img src={WuyeSite4} alt="" /></li>
                            <li><h4>Site Layout View of Wuye Site</h4><img src={WuyeSite5} alt="" /></li>
                        </ul>
                        
                        <a id="prev" href="#1">&#8810;</a>
                        <a id="next" href="#1">&#8811;</a> 
                    </div>
                </div>
            </div>
        )
    }
}
