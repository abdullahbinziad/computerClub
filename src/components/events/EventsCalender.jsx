import React from "react";
import MyDayPicker from "../daypicker/DayPick";
import img from '../../assets/events/n.jpg'
import backgroundImage from '../../assets/shape-bg/bg-20.svg'

const EventsCalender = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`,  }}  className=" bg-no-repeat bg-cover bg-right		">
    <div className="w-3/4 mx-auto py-10">
    <h1 className="text-3xl py-7 font-semibold text-fcBtn">   Select Date to Know Events  </h1>
    <div  className=" flex justify-between ">
       
      <div className="flex-1">
        <MyDayPicker></MyDayPicker>
      </div>
      <div className=" shadow-lg rounded-md
       ">
 <img className="w-full h-80 object-contain rounded-md " src={img} alt="" />

       </div>
     
    </div>
    </div>
    </div>
  );
};

export default EventsCalender;
