import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../hooks/UseAuth';
import { Input } from '@material-tailwind/react';
import { toast } from 'react-toastify';
import use100PercentProfile from '../../hooks/use100PercentProfile';

const EditStudentInfo = () => {
  const { user } = UseAuth();
  const [totalPoints,refetch]  = use100PercentProfile();

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




    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()


    const handleSubmitStudentInfo = (data) => {
    
        // Handle form submission (e.g., send data to server)
        console.log("Form submitted:", data);
    
        axios
          .put(`http://localhost:3000/userInfo/${user?.email}`, data)
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



    return (
        <div>
            
   
          <h1 className="text-xl font-bold pb-4 text-center  text-gray-700">
            Member Info
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmitStudentInfo)}
            className="space-y-3 my-3"
            action=""
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-10">
              <div className="form-control w-full ">
                <Input
                  variant="static"
                  label="Full Name"
                  placeholder="Full name"
                  {...register("fullname")}
                  name="fullname"
                   defaultValue={data[0]?.fullname}
                required
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
                  {...register("department")}
                   defaultValue={data[0]?.department}
                   required
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
                  {...register("batch")}
                   defaultValue={data[0]?.batch}
                   required
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
                   defaultValue={data[0]?.session}
                   {...register("session")}
                   required
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
                   defaultValue={data[0]?.studentID}
                   {...register("studentID")}    
                   required           
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
        
    );
};

export default EditStudentInfo;

