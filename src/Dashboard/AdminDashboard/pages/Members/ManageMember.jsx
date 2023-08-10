import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";

import ModalMemberDetails from "../../../../components/modal/ModalMemberDetails";

const ManageMember = () => {
  const {
    isLoading,
    error,
    data = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("http://localhost:3000/member").then((res) => res.data),
  });
  console.log(data);
// the modal
const [open, setOpen] = useState(false);


const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleCancel = () => {
  handleClose();
};

const handleConfirm = (email) => {
  axios
  .put(`http://localhost:3000/member/updateRole/${status.email}`, {role:"approved"} )
  .then(function (response) {
    console.log(response);
    if (response.status == 200) {
      toast.success(`Successfully Approved `);
      refetch()
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  handleClose();
};




//the select status 
const [status,setStatus] = useState({});

const handleAction=()=>{

//delete 
if(status.role ==="delete"){
 
    axios
      .delete(`http://localhost:3000/deleteMember/${status.id}`, )
      .then((res) => {
        
        console.log(res) ;
        toast.success("Successfully Deleted", {
            theme: "colored"
          })
        refetch()
    })
      .catch((err) => console.log(err));
}
else {
axios
  .put(`http://localhost:3000/member/updateRole/${status.email}`, {role:status.role} )
  .then(function (response) {
    console.log(response);
    if (response.status == 200) {
      toast.success(`Successfully ${status.role} `);
      refetch()
    }
  })
  .catch(function (error) {
    console.log(error);
  });

}



  console.log(status);
}


  //the head title of the table
  const TABLE_HEAD = ["Person", "Department", "Batch", "Status","View Details", " Take Action "];
  return (
    <div className="container ">
      <Card className="h-screen">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
              Manage Member
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Here are All members who are Registered
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
          
            </div>
          </div>
        </CardHeader>
        <CardBody className=" overflow-y-auto ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                { 
                
                TABLE_HEAD.map((head,index) => {
const islast = index === TABLE_HEAD.length-1 ;

                 return (
                  <th
                  key={index}
                  className={`border-y border-blue-gray-100 ${islast?'text-center ':''} bg-blue-gray-50/50 p-4`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal  leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
                 )
                 })}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    _id,
                    image,
                    fullname,
                    session,
                    batch,
                    department,
                    studentID,
                    email,
                    mobile,
                    fulladdress,
                    role
                  },
                  index
                ) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                    

                  return (
                    <tr key={_id}>
                     <ModalMemberDetails  open={open}
        onClose={handleClose}
     content={{ _id,
      image,
      fullname,
      session,
      batch,
      studentID,
      department,
      email,
      mobile,
      fulladdress,
      role}}
        onCancel={handleCancel}
        onConfirm={handleConfirm} />
    
    
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={image}
                            alt={fullname}
                            size="xl"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fullname}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                        </div>
                      </td>
                   
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          
                          {department}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {batch}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={role}
                          color={
                            role === "approved"
                              ? "green"
                              : role === "denied"
                              ? "red"
                              : role === "pending"
                              ? "amber"
                              : role === "suspended"
                              ? "indigo"
                              : "cyan"
                          }
                        />
                      </div>
                      </td>
<td className={classes}>
<Tooltip content=" Details">
                       
                          <IconButton onClick={handleOpen} variant="text" color="blue-gray">
                            <EyeIcon  className="h-4 w-4" />
                          </IconButton>
                     
                        </Tooltip>
</td>

                      <td className={`${classes}  items-center  space-x-2`}>
                      

                        <select
              variant="outlined"
              className="p-2 border-1 border rounded-md"
              onChange={(event) => setStatus({ id: _id, email: email,role: event.target.value})} // Set value directly to the state
        // Set the selected value from the state
              label="Sort By"
            >
              <option disabled >Select </option>
              <option value="approved">Approved </option>
              <option value="denied">Deny</option>
              <option value="suspended">Suspended</option>
              <option value="delete">Delete</option> 

            </select>


                        <Tooltip content="Action">
                    
                       <Button onClick={()=>handleAction()} color="green" size="sm">Action</Button>
                       
                        </Tooltip>
                      
                       
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
         
        </CardFooter> */}
      </Card>
      <ToastContainer />

    </div>
  );
};

export default ManageMember;
