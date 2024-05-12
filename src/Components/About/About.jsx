// import React from 'react';
import "./about.css"

const About = () => {
    return (
        <div id='about' className=" container p-5 mt-lg-0 m-3 w-75 m-auto d-lg-flex d-block flex-column justify-content-center vh-100">
            <p className="aboutTitle">ABOUT US</p>
            <h2 className="aboutHeading">WHO AM I?</h2>
            <p className="aboutText"><strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p className="aboutText">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <div className="row">
                <div className="col-md-3">
                    <div className="services item-1">
                        <span className="icon1">
                            <i className="fa-regular fa-lightbulb"></i>
                        </span>
                        <h3 className="mt-4">Graphic Design</h3>

                    </div>


                </div>
                <div className="col-md-3">
                    <div className="services item-2">
                        <span className="icon1">
                            <i className="fa-solid fa-earth-africa"></i>
                        </span>
                        <h3 className="mt-4">Web Design</h3>

                    </div>


                </div>
                <div className="col-md-3">
                    <div className="services item-3">
                        <span className="icon1">
                            <i className="fa-solid fa-database"></i>
                        </span>
                        <h3 className="mt-4">Software</h3>

                    </div>


                </div>
                <div className="col-md-3">
                    <div className="services item-4">
                        <span className="icon1">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </span>
                        <h3 className="mt-4">Application</h3>

                    </div>


                </div>
            </div>

        </div>

    );
}

export default About;
