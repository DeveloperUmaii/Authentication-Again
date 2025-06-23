import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const OutletLayOut = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default OutletLayOut;