// import React from 'react';
import './home.css';

import img1 from '../../assets/images/img_bg_1-PzvG2r05.jpg';
import img2 from '../../assets/images/img_bg_2-DzCs5o-0.jpg';

const Home = () => {
    return (
        <div className="vh-100 position-relative">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade h-100  " data-bs-ride="carousel">

                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100 " data-bs-interval="1500" >
                        <img src={img1} className="d-block w-100 h-100 rounded-0" alt="..." />
                        <div className="carousel-caption d-none d-md-block w-50 text-center text-md-start">
                            <h1>Hi! <br />Im Jackson</h1>
                            <p>100% html5 bootstrap templates Made <br /> By <a href="https://colorlib.com/">Colorlib.com</a></p>
                            <button>Download cv <i className='fa-solid fa-download'></i></button>
                        </div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="1500"     >
                        <img src={img2} className="d-block w-100 h-100 rounded-0" alt="..." />
                        <div className="carousel-caption d-none d-md-block w-50 text-center text-md-start">
                            <h1>I am <br /> a Designer</h1>
                            <p>100% html5 bootstrap templates Made <br /> By <a href="https://colorlib.com/">Colorlib.com</a></p>
                            <button>VIEW PORTFOLIO  <i className='fa-solid fa-briefcase'></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Home;
