

// import React, { useState } from "react";
// import Uploader from "../../components/uploader/Uploader";

// const MebershipRegistration = () => {

//     const [image, setImage] = useState("");
//   const [formData, setFormData] = useState({
//     step: 1,
//     fullName: "",
//     department: "",
//     batch: "",
//     session: "",
//     studentID: "",
//     fullAddress: "",
//     cv: null,
//     email : "",
//     mobile : "",
//     fb : "",
//     github : "",
//     coderProfile : "",
//     linkdin : "",
//     whatsapp : "",
//   });

//   const {
//     step,
//     fullName,
//     department,
//     batch,
//     session,
//     studentID,
//     fullAddress,
//     cv,
//     email,
//     mobile,
//     fb,
//     github,
//     coderProfile,
//     linkdin,
//     whatsapp
    

//   } = formData;



//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//   };

//   const nextStep = () => {
//     setFormData({
//       ...formData,
//       step: step + 1,
//     });
//   };

//   const prevStep = () => {
//     setFormData({
//       ...formData,
//       step: step - 1,
//     });
//   };

//   return (
//     <div  className=" mt-20 py-20 w-1/2 mx-auto">
//     <div className=" shadow-lg p-10 rounded-lg" >
//       {step === 1 && (
//         <div>
//           <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Full Name</label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="fullName"
//               value={fullName}
//               onChange={handleChange}
//               placeholder="Full Name"
//             />
//           </div>
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Department </label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="department"
//               value={department}
//               onChange={handleChange}
//               placeholder="Department"
//             />
//           </div>
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Batch / Intake </label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="batch"
//               value={batch}
//               onChange={handleChange}
//               placeholder="Batch / Intake"
//             />
//           </div>
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Session </label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="session"
//               value={session}
//               onChange={handleChange}
//               placeholder="Session"
//             />
//           </div>
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Studet ID </label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="studentID"
//               value={studentID}
//               onChange={handleChange}
//               placeholder="Student ID"
//             />
//           </div>
         
           
           
           
          
//           </div>
//          <div className="flex  justify-end">
//          <button
//             className="  bg-orange-700 text-white py-3 px-8 mt-3 "
//             onClick={nextStep}
//           >
//             Next
//           </button>
//          </div>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//          <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Full Address</label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="text"
//               name="fullAddress"
//               value={fullAddress}
//               onChange={handleChange}
//               placeholder="Full Address"
//             />
//           </div>
//           {/* <div className="space-y-2 flex flex-col">
//           <label htmlFor="">Cv /Resume </label>
//           <input
//               className="border border-teal-100 py-3 px-6 rounded-md"
//               type="file"
//               name="cv"
//               value={cv}
//               onChange={handleChange}
//               placeholder="Cv or Resume"
//             />
//           </div> */}
//           <div className="space-y-2 flex flex-col">
//           <div className="flex flex-col space-y-1">
//             <label htmlFor="">Image</label>
//             <Uploader  setImage={setImage} image={image}></Uploader>
//           </div>
//           </div>
       
         
//           <div className="flex  justify-between">
//          <button
//             className="  bg-orange-700 text-white py-3 px-8 mt-3 "
//             onClick={prevStep}
//           >
//             Previous
//           </button>
//          <button
//             className="  bg-orange-700 text-white py-3 px-8 mt-3 "
//             onClick={nextStep}
//           >
//             Next
//           </button>
//          </div>
           
           
          
//           </div>
      
//         </div>
//       )}
//       {step === 3 && (
//         <div className="">
//     <div className=" grid grid-cols-1 gap-6 ">
         
//          <div className="flex flex-col space-y-1">
//            <label htmlFor="">Email</label>
//            <input
//              required
//              onChange={handleChange}
//              className="border border-teal-100 py-3 px-6 rounded-md"
//              type="email"
//              name="email"
//              value = {email}
//              placeholder="Email Address"
//            />
//          </div>
//          <div className="flex flex-col space-y-1">
//            <label htmlFor="">Contact Number</label>
//            <input
//              onChange={handleChange}
//              className="border border-teal-100 py-3 px-6 rounded-md"
//              type="text"
//              name="mobile"
//              value = {mobile}
//              placeholder="Mobile Number : +8801874....."
//            />
//          </div>
   
//          <div className="w-full space-y-3">
//          <label htmlFor="">Social LInk</label>
//          <input
//             onChange={handleChange}
//              className="border border-teal-100 py-3 px-6 rounded-md w-full"
//              type="text"
//              name="fb"
//              value = {fb}
//              placeholder="Facebook Profile Link Here"
//            />
//            <input
//        onChange={handleChange}
//              className="border border-teal-100 py-3 px-6 rounded-md w-full"
//              type="text"
//              name="github"
//              value = {github}
//              placeholder="Github Link Here"
//            />
//            <input
//              onChange={handleChange}
//              className="border border-teal-100 py-3 px-6 rounded-md w-full"
//              type="text"
//              name="coderProfile"
//              value = {coderProfile}
//              placeholder="Profile Link of : Code Forces/ Lett Code / Code sheef etc"
//            />
//             <input
//           onChange={handleChange}
//            className="border border-teal-100 py-3 px-6 rounded-md w-full"
//            type="text"
//            name="linkdin"
//            value = {linkdin}
//            placeholder="Linkdin Profile Link Here"
//          /> <input
//          onChange={handleChange}
//          className="border border-teal-100 py-3 px-6 rounded-md w-full"
//          type="text"
//          name="whatsapp"
//          value = {whatsapp}
//          placeholder="Whatsapp Number : +8801874....."
//        />
     
//          </div>
         
//        </div>
//            <div className="flex justify-between">
//         <button
//             className="  bg-orange-700 text-white py-3 px-8 mt-3 mx-2 "
//             onClick={prevStep}
//           >
//             Previous
//           </button>
//           <button
//             className="  bg-orange-700 text-white py-3 px-8 mt-3 "
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//         </div>
//       )}
      
//     </div>
//     </div>
//   );
// };

// export default MebershipRegistration;
