// import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='text-center vh-100' style={{ 'backgroundColor': "#EDEEF2" }}>
            <img className='w-75 h-100' src={notFound} alt="NotFound" />
            <Link to="/home" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
    );
}

export default NotFound;
