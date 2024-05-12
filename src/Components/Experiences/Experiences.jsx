// import React from 'react';
import "./experience.css"

const Experiences = () => {
    return (
        <div id="experience " className="container py-5 w-75 m-auto">
            <p className="experienceTitle">EXPERIENCE</p>
            <h2 className="experienceHeading">WORK EXPERIENCE</h2>

            <ul className="jobs position-relative">
                <li>
                    <div className="job-icon bg-primary ">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className="job-info ">
                        <h2 >
                            Full Stack Developer<span className="px-2">2017-2018</span>
                        </h2>
                        <p className="pt-4">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                    <div className="clr clearfix">

                    </div>
                </li>

                <li >
                    <div className="job-icon bg-danger">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className="job-info">
                        <h2 >
                            Front End Developer at Google Company<span className="px-2">2017-2018</span>
                        </h2>
                        <p className="pt-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>


                    </div>
                    <div className="clr clearfix"></div>

                </li>
                <li >
                    <div className="job-icon  bg-warning">
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className="job-info">
                        <h2 >
                            System Analyst<span className="px-2">2017-2018</span>
                        </h2>
                        <p className="pt-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>


                    </div>
                    <div className="clr clearfix"></div>

                </li>
                <li >
                    <div className="job-icon ">

                    </div>

                    <div className="clr clearfix"></div>

                </li>






            </ul>

        </div>
    );
}

export default Experiences;
