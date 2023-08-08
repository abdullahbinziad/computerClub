import React from 'react';

import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Dashboard/AdminDashboard/dashboardSideBard/DashboardSideBar';

const DashboardLayOut = () => {
    return (
        <div className=''>
            <div className='flex justify-center '>
<div className='w-full  max-w-[22rem]'>
<DashboardSidebar></DashboardSidebar>
</div>
<div className=' container  py-20'>
<Outlet></Outlet>
</div>
            </div>
        </div>
    );
};

export default DashboardLayOut;