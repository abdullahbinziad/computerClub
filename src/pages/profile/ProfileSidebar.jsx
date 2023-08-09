import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserGroupIcon,
  UserCircleIcon,
  InboxIcon,
  BookOpenIcon,
  PencilSquareIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useMember from "../../hooks/useMember";

 
export default function ProfileSidebar() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
// verify is Member 
const [isMember] = useMember()
console.log(isMember);



  return (
    <Card className="  top-[calc(120px-2rem)] h-[calc(100%-6rem)] left-4 bg-[#5846aa]  w-full max-w-[20rem] p-4 shadow-xl  shadow-white-900/5">
   
     <div className="mb-2 p-4 flex flex-col justify-center items-center ">
    
    <img className=" my-4 rounded-full object-cover w-20  border-4 h-20" src="https://imagevars.gulfnews.com/2019/09/04/Sheikh-Abdullah-Bin-Zayed-Bin-Sultan-Al-Nahyan-20190904_16cfa7f19d8_large.jpg" alt="" />
   { isMember ? <Typography variant="h5"  color="white">
    ID: 2073547  
    </Typography> :
     <Typography variant="h6"  color="white">
     No Membership 
    </Typography>}
  </div>
  <List>
    <Accordion
      open={open === 1}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 text-white">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5 text-white " />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Profile
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0 text-white">
     
          <Link to='/member/editprofile'>
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
            Edit Profile
          </ListItem>
          </Link>
        { isMember && <ListItem >
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
            Add Projects
          </ListItem>
          }
          
        </List>
      </AccordionBody>
    </Accordion>
   { isMember && <Accordion
      open={open === 2}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto disabled:opacity-75 h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
        />
      }
    >
      <ListItem className="p-0 text-white" selected={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 text-white">
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Courses
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0 text-white">
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
          Enrolled Course
          </ListItem>

          <Link to='/dashboard/manage-executive'>
          <ListItem className="text-white">
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
            Favorite Course
          </ListItem>
          </Link>

          <Link to='/dashboard/add-executive'>
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
            Create Course
          </ListItem>
          </Link>
        </List>
      </AccordionBody>
    </Accordion>

    }
   { isMember && <Accordion
      open={open === 3}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3 text-white">
          <ListItemPrefix>
            <PencilSquareIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Blogs
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0 text-white">
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
           My Blogs
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
            </ListItemPrefix>
            Write a Blogs
          </ListItem>
      
        </List>
      </AccordionBody>
    </Accordion>}
  
  { isMember && <ListItem className="text-white">
      <ListItemPrefix>
        <BookOpenIcon className="h-5 w-5 text-white" />
      </ListItemPrefix>
      My Activity
     
    </ListItem>}
    <hr className="my-2 border-white-50" />
   { isMember && <ListItem className="text-white">
      <ListItemPrefix>
        <InboxIcon className="h-5 w-5 text-white" />
      </ListItemPrefix>
      Notification
      <ListItemSuffix>
        <Chip value="14" size="sm" variant="ghost" color="white" className="text-white rounded-full" />
      </ListItemSuffix>
    </ListItem>}
  <Link to="/member" > <ListItem className="text-white">
      <ListItemPrefix>
        <UserCircleIcon className="h-5 w-5 text-white" />
      </ListItemPrefix>
      Profile
    </ListItem>

    </Link>

    <ListItem className="text-white">
      <ListItemPrefix>
        <PowerIcon className="h-5 w-5 text-white" />
      </ListItemPrefix>
      Log Out
    </ListItem>
  </List>
    
    </Card>
  );
}