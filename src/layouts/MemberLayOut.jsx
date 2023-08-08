import React from "react";
import MyNav from "../shared/header/MyNav";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import ProfileSidebar from "../pages/profile/ProfileSidebar";

const MemberLayOut = () => {
  return (
    <div className=''>
     <MyNav></MyNav>
    <div className='flex justify-center  bg-blue-gray-50   '>
<div className='w-full  max-w-[22rem]  '>
<ProfileSidebar></ProfileSidebar>
</div>
<div className=' container  py-20'>
<Outlet></Outlet>
</div>
    </div>

 
</div>
  );
};

export default MemberLayOut;
