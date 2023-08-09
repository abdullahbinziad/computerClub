import { ChevronRightIcon, PencilIcon } from "@heroicons/react/24/outline";
import { CheckIcon, LinkIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  IconButton,
  Input,
  ListItem,
  Option,
  Select,
  Textarea,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import UseAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import use100PercentProfile from "../../../hooks/use100PercentProfile";
import EditStudentInfo from "../../../components/editprofile/EditStudentInfo";
import useMember from "../../../hooks/useMember";


const platformname = [
  { name: "Facebook" },
  { name: "LinkedIn" },
  { name: "WhatsApp" },
  { name: "Github" },
  { name: "CodeForces" },
  { name: "LeetCode" },
  { name: "CodeChef" },
  { name: "Beecrowd" },
  { name: "Website" },
  { name: "YouTube" },
];

const EditProfile = () => {
  const { user } = UseAuth();
  console.log(user?.email);
  const [totalPoints,refetch]  = use100PercentProfile();
  const [isMember] = useMember() ;

  const {
    isLoading,
    error,
    data = [],
    
    isFetching,
  } = useQuery({
    queryKey: ["repoData", user?.email],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/member?email=${user?.email}`)
        .then((res) => res.data),
  });




  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [socialLinks, setSocialLinks] = useState( []);

  useEffect(() => {
    if (data && data[0]?.socialLink) {
      setSocialLinks(data[0]?.socialLink);
    }
  }, [data]);


  const [availableSocialMedia, setAvailableSocialMedia] =
    useState(platformname);

  const handleSocialMediaChange = (value) => {
    setSelectedSocialMedia(value);

    setSocialMediaLink("");
  };

  const handleLinkChange = (event) => {
    setSocialMediaLink(event.target.value);
  };

  const addSocialLink = () => {
    if (selectedSocialMedia && socialMediaLink) {
      const newSocialLink = {
        platform: selectedSocialMedia,
        link: socialMediaLink,
      };
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
      prevOptions
        .concat({ name: deletedPlatform })
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const postSocialLinks = () => {
    // Here you can perform the API call to post the socialLinks array to the backend
    // Replace this with your actual API request implementation
    console.log("Posting social links to backend:", socialLinks);

    axios
      .put(`http://localhost:3000/userSocial/${user?.email}`, socialLinks)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success("Member Info Updated");
          refetch();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get data


  const [address, setAddress] = useState({
    mobile:  data[0]?.mobile,
    fulladdress: data[0]?.fulladdress,
  });

  const handleSubmitaddress = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)

    axios
      .put(`http://localhost:3000/userContact/${user?.email}`, address)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success("Contact Updated");
          refetch()
          
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const handleInputAddressChange = (event) => {
    const { name, value } = event.target;

    setAddress((prevData) => ({ ...prevData, [name]: value }));
  };

  // const { fullname, department, batch,session, studentID } = studentInfo;
  // const { email, mobile, fulladdress } = address;

 


  return (
    <div>
    <div className="p-6 ">
  {!isMember && <div className="bg-card-grad2 rounded-md mb-3 py-3 px-10 justify-between text-white flex gap-3">
   <h1 className="text-center text-xl font-bold py-2 text-gray-700 ">You Profile is {totalPoints<=100 ? totalPoints : 100}% Done </h1>

<button  disabled={totalPoints>=100 ? false : true} className={`bg-green-600 py-2 px-4 rounded-lg ${
          totalPoints>=100 ? '' : 'disabled:opacity-25'
        }`}>Apply for Membership </button>


  </div>}
      <div className=" flex  gap-8 mx-auto   rounded-lg">
     
        <div className="flex-1 w-full h-fit shadow-md bg-white rounded-lg p-8">
      
<EditStudentInfo/>

        </div>

        <div className=" flex-1">
          <div className="w-full h-fit bg-white shadow-md rounded-lg p-8  mb-3">
            <h1 className="text-xl font-bold pb-4 text-center  text-gray-700">
              Address{" "}
            </h1>

            <form
              onSubmit={handleSubmitaddress}
              className="space-y-3 my-3"
              action=""
            >
              <div className="grid grid-cols-1 gap-x-4 gap-y-8">
                <div className="form-control w-full ">
                  <Input
                    disabled
                    label="Email"
                    placeholder="Your Email"
                    name="email"
                     defaultValue={user?.email}
                    type="email"
                    className=""
                  />
                </div>
                <div className="form-control w-full ">
                  <Input
                  required
                    variant="static"
                    label="Mobile Number"
                    placeholder="Example: +88017........"
                    name="mobile"
                     defaultValue={data[0]?.mobile}
                    
                    onChange={handleInputAddressChange}
                    type="number"
                    className="input py-5 w-full bg-doctor-login-input"
                  />
                </div>
                <div className="form-control w-full ">
                  <Input
                  required
                    variant="static"
                    label="Full Address"
                    placeholder="Village, Post, Thana, District"
                    name="fulladdress"
                     defaultValue={data[0]?.fulladdress}
                     
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
              <div className="">
                <h1 className=" text-right font-semibold text-xl  pb-4  text-gray-700">
                  Add Social Link
                </h1>

                <Select
                  label="Select Platform"
                  value={selectedSocialMedia}
                  onChange={(value) => handleSocialMediaChange(value)}
                >
                  {availableSocialMedia.map((option) => (
                    <Option key={option.name} value={option.name}>
                      {option.name}
                    </Option>
                  ))}
                </Select>

                {selectedSocialMedia && (
                  <div className="my-3 flex  gap-2 justify-center align items-center">
                    <Input
                      variant="outlined"
                      label={`${selectedSocialMedia} Link`}
                      type="text"
                      value={socialMediaLink}
                      onChange={handleLinkChange}
                      className="w-full"
                    />
                    <button
                      className="bg-btn-primary text-white rounded-md w-24 py-2"
                      onClick={addSocialLink}
                    >
                      Add{" "}
                    </button>
                  </div>
                )}
              </div>
              <div className="">
                <ul className="mt-10">
                  {socialLinks.map((link, index) => (
                    <li key={index} className="  ">
                      <ListItem
                        ripple={false}
                        className="py-1 pr-1 pl-4 flex justify-between p-3"
                      >
                        <div className="flex gap-2">
                          <span className="font-bold"> {link.platform}:</span>
                          <a
                            className="text-left "
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer "
                          >
                            <LinkIcon className="h-4 w-5 text-3xl font-bold text-green-700" />
                          </a>{" "}
                        </div>
                        <div className="flex items-center gap-3  ">
                          <PencilIcon
                            onClick={() => editSocialLink(index)}
                            strokeWidth={3}
                            className="h-4 w-5 text-black-700"
                          />
                          <TrashIcon
                            onClick={() => deleteSocialLink(index)}
                            strokeWidth={3}
                            className="h-6 w-6 text-red-700"
                          />
                        </div>
                      </ListItem>
                    </li>
                  ))}
                </ul>
                {socialLinks.length >= 1 && (
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => postSocialLinks()}
                      className="  bg-btn-primary rounded-md py-2 text-white font-bold  input  w-36  "
                    >
                      Update Now
                    </button>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
