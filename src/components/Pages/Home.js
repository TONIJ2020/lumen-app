import React,{ Component } from 'react';
import wuyeSite from '../../Assets/Wuye-overview.jpg';
import kubwaSite from '../../Assets/Kubwa 3D.jpeg';
import jahiSite from '../../Assets/Jahi TopView.jpeg';
import mabushiSite from '../../Assets/Wuye-5-bedroom-view.jpg';
import HomeImg from '../../Assets/4-Bedroom-fully-detached.jpg';
// import axios from 'axios'

export default class Home extends Component {
    render() {
        // if(this.props.user){
        //     return (
        //         <h2>Welcome! {this.props.user.firstName} {this.props.user.lastName} </h2>
        //     )
        // }
        return(
            <div className="general-home-div">
                {/* Welcome section */}
                <div id="home" className="hero-section">
                    <div className="hero-content-heading">
                        <h3>Lumen-Deo Realties and Constructions Ltd</h3>
                        <p>We are Real Estate Development and Construction Company. Our core goal is in providing need-based <br /> homes for teeming Nigerian population and infrastructural deliveries. We have the spread, expertise <br /> and capacity to deliver on any set project task in the country and beyond</p>
                    </div>
                    <div className="hero-content-btn">
                        <a href="/about">Learn More</a>
                    </div>
                </div>

                {/* Background section */}
                <div className="hero-background">
                    <div className="background">
                        <h4>Background</h4>
                        <p>LUMEN-DEO Real Estate activities include buying, selling, and operating  self-owned and leased properties.<br />
                        <br />
                        We create a theme for our marketing, dedicating ourselves doing something that differentiates us from the competition.
                        <br />
                        <br />
                        We are involved in Commercial Buildings; Low cost/Mass housing; Mixed-use Buildings; Property Purchases & Partnership Opportunities; Improved land parcel sales; Investment acquisition; Construction and build-to-suits for sale and lease purposes</p>
                    </div>
                    <div className="hero-background-pos"><img src={HomeImg} alt="Wuye Fully Detached" className="radial-4-bedroom-detached"/></div>
                </div>

                {/* Our team of Engineers section */}
                <div className="snapshot-team">
                    <h2>Our team of Engineers</h2>
                    <p>Lumen-Deo Realties boasts of a team of 12 Professional Engineers 3 of whom are COREN certified</p>
                </div>
                <div className="snapshot-box">
                    <div className="snapshot-box-content">
                        <div className="box1">
                                <div className="circle"></div>
                                <h5>Engr. Ugochukwu</h5>
                        </div>
                        <div className="box1">
                            <div className="circle1"></div>
                            <h5>Engr. Henry</h5>
                        </div>
                        <div className="box3">
                            <div className="circle2"></div>
                            <h5>Engr. Nicholas</h5>
                        </div>
                    </div>
                </div>

                {/* Our projects section */}
                <div id="gallery" class="gallery-section">
                    <div className="gallery-content">
                        <h4>Our Projects</h4>
                        <p>We have completed projects in Karmo, Mabushi, Wuye, Jahi, Karu and Kubwa Districts within the past five (5) years and have many constructions on-going and at the verge of completion in our sites at Kado, Lugbe and Gaduwa Districts.</p>
                    </div>
                    <div className="gallery-img">
                        <div>
                            <div id="kubwa" className="img">
                                <img src={kubwaSite} alt=""/>
                                <p>Kubwa Site</p>
                            </div>
                            <div id="wuye" className="img">
                                <img src={wuyeSite} alt=""/>
                                <p>Wuye Site</p>
                            </div>
                        </div>
                        <div>
                            <div id="mabushi" className="img">
                                <img src={mabushiSite} alt=""/>
                                <p>Mabushi Site</p>
                            </div>
                            <div id="jahi" className="img">
                                <img src={jahiSite} alt=""/>
                                <p>Jahi Site</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-content-btn">
                        <a href="/projects">See More</a>
                    </div>
                </div>

                {/* contact us section */}
                <div id="send-message" className="send-message">
                    <div className="send-message-content">
                        <h4>Send a message</h4>
                        <p>You can contact us for enquiries by filling-in the information below!</p>
                    </div>
                    <div className="send-message-input">
                        <input type="text" placeholder="Name" className="send-message-text-input"/> 
                        <input type="email" placeholder="Email" className="send-message-email-input"/>
                    </div>
                    <div className="send-message-textarea">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="send-message-btn">
                        <a href="#1" alt="">Send Message</a>
                    </div>
                    <div className="call-us">
                        <ul className="company-contacts">
                            <li>+234 806 409 9530</li>
                            <li>+234 703 085 2400</li>
                            <li>lumencityestate@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }   
}
