import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import MyNav from '../shared/header/MyNav';

const MainLayOut = () => {
    return (
        <div>
            <MyNav></MyNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;