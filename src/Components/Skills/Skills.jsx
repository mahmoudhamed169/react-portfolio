// import React from 'react';
import "./skills.css"

const Skills = () => {
    return (
        <div id="skills" className=" w-75 m-auto  p-4 mt-lg-0 m-2 d-lg-flex d-block flex-column justify-content-center vh-100">
            <p className="skillsTitle">MY SPECIALTY</p>
            <h2 className="skillsHeading">MY SKILLS</h2>
            <p className="skillsText">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb-2 progressTitle">Photoshop</h3>
                    <div className="pro1 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%", overflow: "visible" }}>
                        </div>
                    </div>
                    <h3 className="mb-2 progressTitle">HTML5</h3>
                    <div className="pro2 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%", overflow: "visible" }}>
                        </div>
                    </div>

                    <h3 className="mb-2 progressTitle">WordPress</h3>
                    <div className="pro5 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%", overflow: "visible" }}>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3 className="mb-2 progressTitle">jQuery</h3>
                    <div className="pro3 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%", overflow: "visible" }}>
                        </div>
                    </div>
                    <h3 className="mb-2 progressTitle">CSS3</h3>
                    <div className="pro4 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%", overflow: "visible" }}>
                        </div>
                    </div>

                    <h3 className="mb-2 progressTitle">SEO</h3>
                    <div className="pro6 progress" style={{ height: "6px", overflow: "visible" }} >
                        <div role="progressbar" className="progress-bar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%", overflow: "visible" }}>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Skills;
