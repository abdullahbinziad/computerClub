
import { ChevronRightIcon, PencilIcon } from "@heroicons/react/24/outline";
import { CheckIcon, LinkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { IconButton, Input, ListItem, Option, Select, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";


const platformname =[
  { name: "Facebook",    },
  { name: "LinkedIn",    },
  { name: "WhatsApp",  },
  { name: "Github",     },
  { name: "CodeForces",  },
  { name: "LeetCode",   },
  { name: "CodeChef",   },
  { name: "Beecrowd",    },
  { name: "Website",    },
  { name: "YouTube",    },
]




const EditProfile = () => {


  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [availableSocialMedia, setAvailableSocialMedia] = useState(platformname);

  const handleSocialMediaChange = (value) => {
    setSelectedSocialMedia(value);
   
    setSocialMediaLink("");
  };

  const handleLinkChange = (event) => {
    setSocialMediaLink(event.target.value);
  };

  const addSocialLink = () => {
    if (selectedSocialMedia && socialMediaLink) {
      const newSocialLink = { platform: selectedSocialMedia, link: socialMediaLink };
      setSocialLinks([...socialLinks, newSocialLink]);
      setSelectedSocialMedia("");
      setSocialMediaLink("");
      setAvailableSocialMedia((prevOptions) =>
        prevOptions.filter((option) => option.name !== selectedSocialMedia)
      );
    }
  };

  const editSocialLink = (index) => {
    const linkToEdit = socialLinks[index];
    setSelectedSocialMedia(linkToEdit.platform);
    setSocialMediaLink(linkToEdit.link);
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const deleteSocialLink = (index) => {
    const deletedPlatform = socialLinks[index].platform;
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
    setAvailableSocialMedia((prevOptions) =>
      prevOptions.concat({ name: deletedPlatform }).sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const postSocialLinks = () => {
    // Here you can perform the API call to post the socialLinks array to the backend
    // Replace this with your actual API request implementation
    console.log("Posting social links to backend:", socialLinks);
    // For example, you can use axios or fetch to send the data to the server
  };





  // get data

  const [studentInfo, setStudentInfo] = useState({
    fullname: '',
    department: '',
    batch: '',
    session: '',
    studentID: '',
});
  const [address, setAddress] = useState({
    email: '',
    mobile: '',
    fulladdress: '',
});

const handleSubmitStudentInfo = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', studentInfo);
};
const handleSubmitaddress = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted:', address);
};

const handleStudentInfo = (event) => {
    const { name, value } = event.target;
    setStudentInfo((prevData) => ({ ...prevData, [name]: value }));
    
};
const handleInputAddressChange = (event) => {
    const { name, value } = event.target;
   
    setAddress((prevData) => ({ ...prevData, [name]: value }));
};

const { fullname, department, batch,session, studentID } = studentInfo;
const { email, mobile, fulladdress } = address;


    return (
        <div>
      <div className=" ">
      
      <div className="p-10 flex  gap-8 mx-auto   rounded-lg">
     
     
        <div className="flex-1 w-full h-fit shadow-md bg-white rounded-lg p-8">
          <h1 className="text-xl font-bold pb-4 text-center  text-gray-700">Student Info</h1>
          <form
            onSubmit={handleSubmitStudentInfo}
            className="space-y-3 my-3"
            action=""
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-10">
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Full Name"
                  placeholder="Full name"
                  name="fullname"
                  value={fullname}
                  onChange={handleStudentInfo}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>

              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Department"
                  placeholder=" Example: Computer Science & Engineering"
                  name="department"
                  value={department}
                  onChange={handleStudentInfo}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Batch"
                  placeholder=" Example: 4th "
                  name="batch"
                  value={batch}
                  onChange={handleStudentInfo}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>


              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Your Session"
                  placeholder="Example: 2020-21 "
                  name="session"
                  value={session}
                  onChange={handleStudentInfo}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>

              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Student ID"
                  placeholder="Example: 201963546"
                  name="studentID"
                  value={studentID}
                  onChange={handleStudentInfo}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>

              <div className="form-control flex justify-end w-36  ">
                <button
                  type="submit"
                  className=" bg-btn-primary rounded-md py-2 text-white font-bold  input  w-full "
                >
                  Update Now
                </button>{" "}
              </div>
            </div>
          </form>
        </div>







        <div className=" flex-1">

<div className="w-full h-fit bg-white shadow-md rounded-lg p-8 my-3">
<h1 className="text-xl font-bold pb-4 text-center  text-gray-700">Address </h1>

<form
            onSubmit={handleSubmitaddress}
            className="space-y-3 my-3"
            action=""
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-8">
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleInputAddressChange}
                  type="email"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Mobile Number"
                  placeholder="Example: +88017........"
                  name="mobile"
                  value={mobile}
                  onChange={handleInputAddressChange}
                  type="number"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Full Address"
                  placeholder="Village, Post, Thana, District"
                  name="fulladdress"
                  value={fulladdress}
                  onChange={handleInputAddressChange}
                  type="text"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
          
            <div className="flex justify-end">
            <button
                  type="submit"
                  className="  bg-btn-primary rounded-md py-2 text-white font-bold  input  w-36  "
                >
                  Update Now
                </button>{" "}
            </div>
              </div>
              
             </form>

</div>

     
<div className="w-full h-fit bg-white shadow-md rounded-lg p-8">
      
      <div  className="">

      <h1 className=" text-right font-semibold text-xl  pb-4  text-gray-700">Add Social Link</h1>


        <Select label="Select Platform" value={selectedSocialMedia} onChange={(value)=>handleSocialMediaChange(value)}>
         
          {availableSocialMedia.map((option) => (
            <Option key={option.name} value={option.name}>
              {option.name}
            </Option>
          ))}
        </Select>
   
     {selectedSocialMedia && (
        <div className="my-3 flex  gap-2 justify-center align items-center">
          <Input
          variant="outlined" label={`${selectedSocialMedia} Link`}
            type="text"
           
            value={socialMediaLink}
            onChange={handleLinkChange}
            className="w-full"
          />
      <button className="bg-btn-primary text-white rounded-md w-24 py-2" onClick={addSocialLink}>Add </button>  
     </div>        
        )}
        
       
      </div>
      <div className="">
        
        <ul className="mt-10">
       
          {socialLinks.map((link, index) => (
           
            <li key={index} className="  ">
             <ListItem ripple={false} className="py-1 pr-1 pl-4 flex justify-between p-3">

             <div className="flex gap-2">
           
         <span className="font-bold">  {
            link.platform
           }:</span>
          

              <a className="text-left " href={link.link} target="_blank" rel="noopener noreferrer ">
               <LinkIcon className="h-4 w-5 text-3xl font-bold text-green-700"/> 
              </a>{" "}
             </div>
            <div className="flex items-center gap-3  ">
                 
            <PencilIcon onClick={() => editSocialLink(index)} strokeWidth={3} className="h-4 w-5 text-black-700" />
            <TrashIcon onClick={() => deleteSocialLink(index)} strokeWidth={3} className="h-6 w-6 text-red-700" /> 
            
            </div>
            </ListItem>

            </li>
         
          ))}
        </ul>
      { socialLinks.length >=1 && <div className="flex justify-end mt-6">
       <button
                 onClick={()=> postSocialLinks()}
                  className="  bg-btn-primary rounded-md py-2 text-white font-bold  input  w-36  "
                >
                  Update Now
                </button>{" "}
       </div>}
                
           
      </div>
    </div>

        </div>
      </div>
    </div>
  </div>
    );
};

export default EditProfile;


