import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
  
} from "@material-tailwind/react";
import axios from "axios";

const ModalMemberDetails = ({
  open,
  onClose,
  content,
  onCancel,
  onConfirm,
}) => {
  const {
    _id,
    image,
    fullname,
    session,
    studentID,
    batch,
    department,
    email,
    mobile,
    fulladdress,
    role,
  } = content;



  

  return (
    <Dialog size="xl" open={open} handler={onClose}>
  <div className="flex relative">
  <DialogHeader>  Membership Request: </DialogHeader>
     <div className="w-20 flex justify-end">
     <button className="absolute top-4 right-5 bg-red-600 text-white rounded-full px-3 py-1" onClick={onCancel} >X</button>
     </div>
  </div>
      <DialogBody divider>
<div className="w-full max-w-[48rem] ">

<div className="flex gap-8">
  <div className="">
  <img className="w-64 rounded-md" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />

 
  </div>
  <div className="flex-1 space-y-1">
    <h1 className="uppercase">Student Info</h1>
    <hr />
<h1 className=""> Name:  <span className=" font-semibold">{fullname}</span></h1>
<h1 className=""> Department:  <span className=" font-semibold">{department}</span></h1>
<h1 className=""> Batch:  <span className=" font-semibold">{batch}</span></h1>
<h1 className=""> Session:  <span className=" font-semibold">{session}</span></h1>
<h1 className=""> StudentID:  <span className=" font-semibold">{studentID}</span></h1>


  </div>
  <div className=" space-y-1">
    <h1 className="uppercase">Contact</h1>
    <hr />
<h1 className=""> Email:  <span className=" font-semibold">{email}</span></h1>
<h1 className=""> Mobile:  <span className=" font-semibold">{mobile}</span></h1>
<h1 className=""> Full Address:  <span className=" font-semibold">{fulladdress}</span></h1>


<div className=" flex gap-4">
    <a href=""> <img className="w-6 h-6  rounded-sm" src="https://res.cloudinary.com/dj1sjgitq/image/upload/v1691421056/facebook_icoukb.png" alt="fb" /> </a>
    <a href=""> <img className="w-6 h-6  rounded-sm" src="https://res.cloudinary.com/dj1sjgitq/image/upload/v1691421054/linkdin_vsxa5e.png" alt="ln" /> </a>
    <a href=""> <img className="w-6 h-6  rounded-sm" src="https://res.cloudinary.com/dj1sjgitq/image/upload/v1691421054/whatsapp_ldkvae.png" alt="whatsapp" /> </a>
    <a href=""> <img className="w-6 h-6  rounded-sm" src="https://res.cloudinary.com/dj1sjgitq/image/upload/v1691421057/github_za65oj.png" alt="github" /> </a>


</div>

  </div>
      
    </div>
</div>

      
      
      
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onCancel} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={()=>onConfirm(email)}>
          <span>Approved Now</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalMemberDetails;
