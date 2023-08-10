import React, { useContext, useState } from "react";
import "./header.css";
import {
 
  Typography,
 
  MenuItem,
 
} from "@material-tailwind/react";
import {
AcademicCapIcon,
IdentificationIcon,
UserGroupIcon,
UserPlusIcon,
QueueListIcon,
  TagIcon,
  BookOpenIcon,
  BookmarkIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useMember from "../../hooks/useMember";
import { toast } from "react-toastify";



const  NavList=()=> {

  const {user} = useContext(UserContext);
 const [isAdmin,isAdminLoading] = useAdmin() ;
const [isMember, isMemberLoading] = useMember();
const nevigate = useNavigate();

  const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      label: "Executives",
      icon: UserGroupIcon,
      path: "/executives",
    },
    {
      label: "Events",
      icon: AcademicCapIcon,
      path: "/events",
    },
    
   
   
    // {
    //   label: "Dashoard",
    //   icon: BookmarkIcon,
    //   path:"/dashoard"
    // },
  
  ];

  //the modal 
  // the modal

const handleOpen = () => {
  // Handle confirm action here
  toast.success(" Please Update Profile 100%", {
    theme: "colored",
    position: "top-center",
autoClose: 6000,
  })
  nevigate('/member/editprofile')
  
};



  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal dark:text-white"
        >
          <MenuItem className="flex justify-between  gap-3 ">
            <Link className="flex items-center  gap-3" to={`${path}`}>
              {React.createElement(icon, { className: "h-[26px] w-[26px]" })}{" "}
              {label}
            </Link>
          </MenuItem>
        </Typography>
      ))}
       { !isMember &&
        <Typography
        onClick={handleOpen}
        variant="small"
        color="blue-gray"
        className="font-normal dark:text-white"
      >
        <MenuItem className="flex justify-between  gap-3 ">
          <Link className="flex items-center gap-2" to='/member/editprofile'>
            {React.createElement(UserPlusIcon, { className: "h-[26px] w-[26px]" })}{" "}
           Become Member
          </Link>
        </MenuItem>
      </Typography>
       }
       { isAdmin &&
        <Typography
        
        variant="small"
        color="blue-gray"
        className="font-normal dark:text-white"
      >
        <MenuItem className="flex justify-between  gap-3 ">
          <Link className="flex items-center gap-2" to='/dashboard'>
            {React.createElement(BookmarkIcon, { className: "h-[26px] w-[26px]" })}{" "}
           Admin Dashboard
          </Link>
        </MenuItem>
      </Typography>
       }
    
    </ul>
  );
}

export default NavList;