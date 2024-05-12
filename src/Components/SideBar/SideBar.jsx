// import React from 'react';
import './sidebar.css'
import sideImg from '../../assets/images/about-BgAkqdr2.jpg'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div id='sideBar' className="text-center ">
            <div className='pt-5' >
                <img src={sideImg} alt="About" className='' />
            </div>

            <div className='mt-3'>
                <h2>  Jackson Ford  </h2>
                <p> <Link to="">UI/UX/DESIGNER</Link> IN PHILIPPINES</p>

            </div>

            <div>
                <ul>
                    <li className='pb-3' >
                        <Link to="home" >home</Link>
                    </li>

                    <li className='pb-3' >
                        <Link to="about" >about</Link>
                    </li>
                    <li className='pb-3' >
                        <Link to="skills" >skills</Link>
                    </li>
                    <li className='pb-3' >
                        <Link to="experience" >experience</Link>
                    </li>
                    <li className='pb-3' >
                        <Link to="work" >work</Link>
                    </li>



                </ul>

            </div>
        </div>
    );
}

export default SideBar;
