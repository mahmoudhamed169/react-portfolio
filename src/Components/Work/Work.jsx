// import React from 'react';
import Projects from "../Projects/Projects";
import "./work.css"
const Work = () => {
    return (
        <div className="container py-5 mt-lg-0 mt-3 w-75 m-auto">
            <p className="workTitle">MY WORK</p>
            <h2 className="workHeading">RECENT WORK</h2>


            {/* /* */}
            <ul className="nav nav-tabs mb-3  border-0 " id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Graphic Design</button>
                </li>
                <li className="nav-item  " role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">App</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Software</button>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <Projects />




                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"><Projects /></div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"><Projects /></div>

            </div>





        </div>
    );
}

export default Work;
