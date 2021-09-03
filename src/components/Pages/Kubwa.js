import React, { Component } from 'react';
import kubwaSite from '../../Assets/Kubwa 3D.jpeg';
import kubwaSite1 from '../../Assets/Kubwa BackView.jpeg';
import kubwaSite2 from '../../Assets/Kubwa SideView.jpeg';


export default class Kubwa extends Component {
    render() {
        const responsiveSlider = function() {

        let slider = document.getElementById("kubwa-slider");
        let sliderWidth = slider.offsetWidth;
        let slideList = document.getElementById("kubwa-slideWrap");
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
                <div id="kubwa" className="kubwa-site">
                    <div className="kubwa-site-heading">
                        <h3>Kubwa Site I</h3>
                        <p>Our Kubwa Site I is a mini site that comprised two families of a bedroom flat attached to a full option 5-bedroom duplex</p>
                    </div>
                    <div id="kubwa-slider" className="kubwa-img-slider-div">
                        <ul id="kubwa-slideWrap"> 
                            <li><h4>Front View of Kubwa Site I</h4><img src={kubwaSite} alt="" /></li>
                            <li><h4>Back View of Kubwa Site I</h4><img src={kubwaSite1} alt="" /></li>
                            <li><h4>Side View of Kubwa Site I</h4><img src={kubwaSite2} alt="" /></li>
                        </ul>
                        
                        <a id="prev" href="#1">&#8810;</a>
                        <a id="next" href="#1">&#8811;</a> 
                    </div>
                </div>
            </div>
        )
    }
}
