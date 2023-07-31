import React, { useState } from "react";
import Uploader from "../../../../components/uploader/Uploader";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css' ;

const AddExecutives = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState("");

  const mySubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
        params: {
          key: `${import.meta.env.VITE_IMGBB}`, // Replace with your ImgBB API key
        },
      }
    );
    const imageUrl = response.data.data.url;

    console.log(imageUrl);

    data.image = imageUrl;

    console.log(data);
    //post the data to backend
    axios
      .post("http://localhost:3000/addexecutives", data)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          toast.success("Executive Added Successfully");
         

          reset();
          setImage("reset");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-5/6 mx-auto">

     
      <h1 className="text-2xl font-bold mb-6">Add New Executives Member</h1>
      <form onSubmit={handleSubmit(mySubmit)}>
        <div className=" grid grid-cols-2 gap-6 ">
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Name</label>
            <input
              required
              {...register("name")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Position</label>
            <input
              required
              {...register("position")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="position"
              placeholder="His/Her Position in the Club"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Batch</label>
            <input
              {...register("batch")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="batch"
              placeholder="Mec Batch"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Department</label>
            <input
              required
              {...register("department")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="department"
              placeholder="Department"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Email</label>
            <input
              required
              {...register("email")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Contact Number</label>
            <input
              {...register("mobile")}
              className="border border-teal-100 py-3 px-6 rounded-md"
              type="text"
              name="mobile"
              placeholder="Mobile Number : +8801874....."
            />
          </div>

          <div className="flex flex-col col-span-2 space-y-1">
            <label htmlFor="">Image</label>
            <Uploader setImage={setImage} image={image}></Uploader>
          </div>
        </div>
        <input
          type="submit"
          className="bg-green-500 text-white px-6 py-3 my-5 rounded-md cursor-pointer"
          value="Add Executives"
        />
      </form>

      <ToastContainer/>
    </div>
  );
};

export default AddExecutives;
